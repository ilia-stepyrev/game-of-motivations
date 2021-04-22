const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

module.exports = env => {
  const mode = (env.NODE_ENV || 'development').trim() ;
  const needReloading = (env.NODE_RELOAD || 'true').trim() ;
  const envConfig = require(`./environments/config.${mode}`);
  const suffix = mode === 'development' ? '_dev' : '';
  const indexHtmlPath = `src/index${suffix}.html`;
  const entry =  path.resolve(__dirname, `src/index${suffix}.tsx`);

  const plugins = [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/img', to: 'img' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, indexHtmlPath),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    }),
  ];

  if (needReloading === 'true') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  const commonConfig = {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
    entry,
    mode: mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '.dist'),
      filename: 'bundle.js',
    },
    plugins,
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
  };

  return merge(commonConfig, envConfig);
};