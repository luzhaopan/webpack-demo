const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = {
  // entry: { // 配置多入口, 导致重复引入
  //   main: './src/index.js',
  //   other: './src/other.js',
  // },
  // entry: { // 配置多入口,分离共享的内容，去除重复引入
  //   main: {
  //     import: './src/index.js',
  //     dependOn: 'shared'
  //   },
  //   other: {
  //     import: './src/other.js',
  //     dependOn: 'shared'
  //   },
  //   shared: 'lodash'
  // },
  entry: { // 配置多入口, 使用插件sliptChunks去除重复引入
    main: './src/index.js',
    other: './src/other.js',
  },
  // entry: { 
  //   main: './src/index.js',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name].[contenthash].js', // contenthash根据文件名生成一个hash文件，避免缓存
    clean: true, // 打包之前清理之前dist文件
    assetModuleFilename: 'images/[contenthash][ext]' // 'images/test.png' // 打包图片到该文件夹中
  },

  // mode: 'production', // 生产环境
  mode: 'development', // 开发环境

  devtool: 'inline-source-map', // 利于精准定位错误位置

  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html', // 以当前根目录下的index.html为模板
        filename: 'app.html', // 打包生成的文件名称
        inject: 'body' // 在body当中引入script
    }), // 这将会生成一个包含以下内容的 dist/index.html 文件
    new MiniCssExtractPlugin({
      // 对输出结果重命名
      filename: 'styles/[contenthash].css'
    })
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
            // 抽离 css 为独立文件
            MiniCssExtractPlugin.loader,
            // 将 css 文件整合到 js 文件中
            'css-loader',
            'less-loader'
          ]
        },
        {
          test: /\.m?js$/,
          // 排除 node_modules 中安装的库
          exclude: /(node_modules|bower_components)/,
          use: {
            // 加载 loader
            loader: 'babel-loader',
            options: {
              // 配置预设
              presets: ['@babel/preset-env']
            }
          }
        } // babel-loader： 在 webpack 里应用 babel 解析 ES6 的桥梁
          // @babel/core： babel 核心模块
          // @babel/preset-env： babel 预设，一组 babel 插件的集合
    ]
  },

  optimization: {
    minimizer: [
      // 使用插件优化 css 代码
      new CssMinimizerPlugin()
    ],
    
    splitChunks: { // 该配置可以去除重复引入
      chunks: 'all'
    }
  },

};