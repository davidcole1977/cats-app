module.exports = {
  entry: './src/app.js',
  output: {
    filename: './public/js/app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /.js?$/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};