const path = require("path");

module.exports = {
  entry: "./client/src/index.jsx",
  output: {
    path: path.join(__dirname, "/client/public/dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
