const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
  loaders: [{
    test: /\.jsx?$/,
    include: path.join(__dirname, '/client/src'),
    loader: 'babel-loader',
    query: {
      presets: ["react", "es2015", "stage-1"]
    }
  },
  {
    test: /\.(gif|svg|jpg|png)$/,
    loader: "file-loader",
  }],
};
