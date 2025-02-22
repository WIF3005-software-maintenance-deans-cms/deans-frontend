const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: true, // make sure Router works by redirecting 404 back to entry point
    port: 3000,
    open: true
  }
});
