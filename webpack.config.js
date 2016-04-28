module.exports = {
  context: __dirname + '/src',
  entry: './entry.jsx',
  output: {
    filename: 'app-bundle.js',
    path: './bundle',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
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
