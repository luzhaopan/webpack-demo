const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 配置入口

  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: 'bundle.js',
    clean: true, // 打包之前清理之前dist文件
    assetModuleFilename: 'images/[contenthash][ext]' // 'images/test.png' // 打包图片到该文件夹中
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

  // 安装webpack-dev-server,运行npx webpack-dev-server， 代码修改时时更新页面 
  devServer: {
    static: './dist'
  },

  module: {
    rules: [
        {
            test: /\.png$/,
            type: 'asset/resource',  // 打包png图片
            generator: {
                filename: 'images/[contenthash][ext]' // 优先级高于 output 中的assetModuleFilename
            }
        },
        {
            test: /\.svg$/,
            type: 'asset/inline',  // 用于导出一个资源的data url
        },
        {
          test: /\.txt$/,
          type: 'asset/source',  // 用于导出资源的源代码
        },
        {
          // 监听资源文件
          test: /\.jpg$/i,
          // 设置通用资源类型asset，在导出一个data url 和发送一个单独的文件之间自动选择
          type: 'asset', 
          // 小于设置的大小则转为 64 位图，否则转 URL
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024 // 4kb
            }
          },
          generator: {
            // 生成资源名称
            filename: 'images/[name][ext]'
          }
        },
        {
          test: /\.(css|less)$/i,
          use: [ // 顺序不能变
            // 在 head 中创建 style 标签
            'style-loader',
            // 将 css 文件整合到 js 文件中
            'css-loader',
            'less-loader'
          ]
        }
    ]
  }

};