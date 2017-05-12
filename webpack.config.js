module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      include: __dirname,
      query: {
        presets: ['es2015', 'react', 'react-hmre'],
      },
    }],
  },
};
