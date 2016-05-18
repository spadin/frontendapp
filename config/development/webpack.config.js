module.exports = {
  context: __dirname + '/src',
  entry: './entry.js',
  output: {
    filename: 'app-bundle.js',
    path: './bundle',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: '#eval',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      }
    ],
  },
};
