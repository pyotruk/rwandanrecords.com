const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const yaml = require('js-yaml')
const fs = require('fs')

const env = process.env.SPIKE_ENV

const getStaticContent = (name) => yaml.safeLoad(fs.readFileSync(`./content/${name}.yaml`, 'utf8'))

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'package-lock.json', '.*/**/*', 'content/*'],
  reshape: htmlStandards({
    locals: (ctx) => {
      return {
        pageId: pageId(ctx),
        records: getStaticContent('records')
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
