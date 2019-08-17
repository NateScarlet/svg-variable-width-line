const Config = require('webpack-chain');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const config = new Config();
  config.entry('index').add('./src/index.ts');
  config.resolve.alias.set('@', path.resolve(__dirname, 'src'));

  config.resolve.extensions.add('.ts').add('.js');

  config.module
    .rule('typescript')
    .test(/.ts$/)
    .use('babel')
    .loader('babel-loader')
    .end()
    .use('typescript')
    .loader('ts-loader')
    .end();
  config.devServer.contentBase('demo');
  if (!(argv && argv.mode === 'production')) {
    config.mode('development');
    config.devtool('inline-source-map');
    config.entry('demo').add('./demo/index.ts');
    config
      .plugin('html')
      .use(HtmlWebpackPlugin, [
        { template: 'demo/index.html', chunks: ['demo'] },
      ]);
  }
  return config.toConfig();
};
