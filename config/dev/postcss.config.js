module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-cssnext')({ browsers: ['last 1 versions'] })
  ]
}
