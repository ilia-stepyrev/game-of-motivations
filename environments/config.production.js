module.exports = {
  devtool: false,
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '~',
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        defaultVendors: {
          priority: -10,
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
        }
      },
      chunks: 'async',
      enforceSizeThreshold: 50000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      maxSize: 0,
      minChunks: 1,
      minRemainingSize: 0,
      minSize: 50000,
    }
  },
  output: {
    filename: '[contenthash].bundle.js',
  },
};
