module.exports = {
  devServer: {
    disableHostCheck: true
  },
  pages: {
    index: {
      entry: './src/main.ts',
      template: './src/index.pug'
    }
  }
}