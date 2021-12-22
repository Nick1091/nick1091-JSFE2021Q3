const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : "style-loader";

const config = {
  entry: "./src/index.ts",
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: 'assets/[name][ext][query]',
  },
  devServer: {
    open: true,
    host: "localhost",
    static: ['./src', './public'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: path.resolve(__dirname, './src/assets/favicon.ico'),
    }),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src/assets/toys'),
          to: path.resolve(__dirname, 'dist/assets/toys'),
          noErrorOnMissing: true,
        },
        { 
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true,
        },
      ],
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),      
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", "mjs", ".ts", ".js"],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = "development";
  }
  return config;
};
