module.exports = (env, argv) => {
  const config = require('./webpack.common.config');
  config.entry('index').add('./src/index.ts');
  config.output.library('svgVariableWidthLine').libraryTarget('umd');
  return config.toConfig();
};
