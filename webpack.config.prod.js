const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {

  output: {
    filename: 'scripts/[name].[contenthash].js', // contenthash根据文件名生成一个hash文件，避免缓存
    publicPath: 'http://localhost:8080/', // 配置引入资源的公共路径
  },

  mode: 'production', // 生产环境

  optimization: {
    minimizer: [
      // 使用插件优化 css 代码
      new CssMinimizerPlugin(),
      // 使用插件压缩 js 代码 (生产模式) npx webpack --env production
      new TerserWebpackPlugin(),
    ],

  },
  performance: {
    hints: false, // 去掉一些警告
  },
};
