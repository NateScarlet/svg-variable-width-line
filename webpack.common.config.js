const Config = require('webpack-chain');
const path = require('path');
const config = new Config();

config.mode('development');
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

module.exports = config;
