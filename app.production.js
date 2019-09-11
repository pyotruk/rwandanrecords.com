const optimize = require('spike-optimize')

module.exports = {
  devtool: false,
  afterSpikePlugins: [...optimize({
    scopeHoisting: false,
    aggressiveSplitting: false,
    minify: false
  })]
}
