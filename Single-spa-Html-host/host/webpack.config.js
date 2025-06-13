const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        child:'child@http://localhost:3002/remoteEntry.js'
      },
      shared: {
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
