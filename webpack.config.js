const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './javascript/entry.js',
  output: {
    filename: 'app-bundle.js',
    path: './bundle',
    publicPath: '/bundle/',
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
