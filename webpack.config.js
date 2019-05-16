module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  entry: {
    app: __dirname + '/client/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};