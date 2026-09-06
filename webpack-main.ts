//

import path from "path";
import externals from "webpack-node-externals";
import CopyPlugin from "copy-webpack-plugin";


let config = {
  entry: {
    index: ["./generator/index.ts"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  devtool: "inline-source-map",
  mode: "development",
  target: "node",
  externals: [externals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: {
          loader: "source-map-loader"
        }
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, "dist/"),
        use: {
          loader: "raw-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "raw-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.ya?ml$/,
        use: {
          loader: "yaml-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "raw-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".scss", ".html"]
  },
  plugins: [
  ],
  cache: true
};

export default config;