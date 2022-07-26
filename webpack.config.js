const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 配置入口

  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js'
  },

  mode: 'none',

  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html', // 以当前根目录下的index.html为模板
        filename: 'app.html', // 打包生成的文件名称
        inject: 'body' // 在body当中引入script
    }) // 这将会生成一个包含以下内容的 dist/index.html 文件
  ], 

};