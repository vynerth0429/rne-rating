const path = require('path');
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackPlugin,
} = require('customize-cra');

module.exports = override(
  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),
  babelInclude([path.resolve(__dirname, 'src')]),
);
