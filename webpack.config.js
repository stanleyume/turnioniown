module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  }
}
