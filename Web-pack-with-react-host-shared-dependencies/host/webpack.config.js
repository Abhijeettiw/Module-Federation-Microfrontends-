const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const package = require('./package.json')

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3001,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js",
      exposes: {
        // "./Hello": "./src/components/Hello", 
      },
      remotes:{
        Child:'Child@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        react: { 
          // singleton: true, 
          version: package.dependencies.react 
        },
        "react-dom": {
          // singleton: true,
          version: package.dependencies["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
