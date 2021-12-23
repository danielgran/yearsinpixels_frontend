module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        return [{template: 'src/Frontend/HTML/index.html'}]
      })
  }
}