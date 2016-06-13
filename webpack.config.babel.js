import path from 'path';
import webpack from 'webpack';

function getPlugins(env) {
  const { DefinePlugin, optimize: { UglifyJsPlugin } } = webpack;
  const plugins = [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
      },
    }),
  ];

  if (env === 'production') {
    plugins.push(new UglifyJsPlugin({ compress: { warnings: false } }));
  }

  return plugins;
}

export default {
  context: path.resolve(__dirname, 'src'),
  entry: './javascript/entry.js',
  output: {
    filename: 'app-bundle.js',
    path: './dist/bundle',
    publicPath: '/bundle/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: getPlugins(process.env.NODE_ENV),
  devServer: {
    historyApiFallback: true,
  },
};
