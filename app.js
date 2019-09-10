const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const yaml = require('js-yaml')
const fs = require('fs')

const env = process.env.SPIKE_ENV

const getStaticContent = (name, lang) => {
  return lang
    ? yaml.safeLoad(fs.readFileSync(`./content/${name}_${lang}.yaml`, 'utf8'))
    : yaml.safeLoad(fs.readFileSync(`./content/${name}.yaml`, 'utf8'))
}

module.exports = {
  devtool: 'source-map',
  ignore: ['views/layouts/*', '**/_*', '**/.*', 'readme.md', 'package-lock.json', '.*/**/*', 'content/*'],
  reshape: htmlStandards({
    root: './',
    locals: (ctx) => {
      return {
        pageId: pageId(ctx),
        records: {
          en: getStaticContent('records', 'en'),
          de: getStaticContent('records', 'de')
        },
        trailer: getStaticContent('trailer'),
        team: {
          en: getStaticContent('team', 'en'),
          de: getStaticContent('team', 'de')
        },
        contacts: getStaticContent('contacts'),
        about: {
          en: getStaticContent('about', 'en'),
          de: getStaticContent('about', 'de')
        }
      }
    },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  module: {
    rules: [
      {test: /\.(css)|(less)/, use: [{loader: 'less-loader'}]}
    ]
  }
}
