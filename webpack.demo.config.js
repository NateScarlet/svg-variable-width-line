const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
module.exports = (env, argv) => {
  const config = require('./webpack.common.config');
  config.entry('index').add('./demo/index.ts');
  config.output
    .path(path.resolve(__dirname, 'dist-demo'))
    .filename('[name].[contenthash].js');
  config.devServer.contentBase('demo');
  config.mode('development');
  config.devtool('inline-source-map');
  config
    .plugin('copy')
    .use(CopyWebpackPlugin, [
      [{ from: 'demo', to: '.' }],
      { ignore: ['*.ts', 'tsconfig.json'] },
    ]);
  config
    .plugin('html')
    .use(HtmlWebpackPlugin, [{ template: 'demo/index.html' }]);
  return config.toConfig();
};
