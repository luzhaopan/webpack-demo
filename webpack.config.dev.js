// const path = require('path');
//
module.exports = {
  output: {
    filename: 'scripts/[name].js', // contenthash根据文件名生成一个hash文件，避免缓存
  },

  mode: 'development', // 开发环境

  devtool: 'inline-source-map', // 利于精准定位错误位置
  // 常用的几种 source-map 类型:
  // source-map：生成外部文件，错误代码的准确信息和源代码的错误位置
  // inline-source-map：内联，错误代码的准确信息和源代码的错误位置。在代码底部生成，构建速度比外部文件更快
  // hidden-source-map：生成外部文件，错误代码的原因，没有错误位置，无法追踪源代码错误。
  // eval-source-map：内联，错误代码的准确信息和源代码的错误位置。每一个文件都生成对应的 source-map
  // nosources-source-map：生成外部文件，
  // cheap-source-map：生成外部文件，错误代码的准确信息和源代码的错误位置。只精确到行
  // cheap-module-source-map：同 cheap-source-map，会将 loader 的 source map 加入

  // 开发环境建议
  // eval-source-map
  // eval-cheap-module-source-map

  // 生产环境建议
  // source-map
  // nosources-source-map
  // hidden-source-map

  // 安装webpack-dev-server,运行npx webpack-dev-server， 代码修改时时更新页面
  devServer: {
    static: './dist',
    // static: path.resolve(__dirname, './dist'),
    // compress: true, // 浏览器传输时进行压缩， 设置 gzip 压缩，提高传输效率
    // port: 3000, // 设定端口
    // host: '0.0.0.0', // 方便其他人访问我的服务
    // headers: {
    //   'X-Access-Token': 'test'
    // },
    // proxy: {
    //   '/api': 'http://localhost:9000' // 代理配置
    // },
    // https: true, // 将本地http服务变成https
    // http2: true // http2自带https自签名证书
    hot: true, // 模块热替换

    liveReload: true, // 启用热加载功能
  },
};
