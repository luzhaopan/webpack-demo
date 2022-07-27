
// 
module.exports = {
  output: {
    filename: 'scripts/[name].js', // contenthash根据文件名生成一个hash文件，避免缓存
  },

  mode: 'development', // 开发环境

  devtool: 'inline-source-map', // 利于精准定位错误位置

  // 安装webpack-dev-server,运行npx webpack-dev-server， 代码修改时时更新页面 
  devServer: {
    static: './dist'
  }
};