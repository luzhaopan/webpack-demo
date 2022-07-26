const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 配置入口

  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',
    clean: true, // 打包之前清理之前dist文件
  },

  mode: 'development', // 开发环境

  devtool: 'inline-source-map', // 利于精准定位错误位置

  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html', // 以当前根目录下的index.html为模板
        filename: 'app.html', // 打包生成的文件名称
        inject: 'body' // 在body当中引入script
    }) // 这将会生成一个包含以下内容的 dist/index.html 文件
  ], 

};