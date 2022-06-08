const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    mode: isProduction ? 'production': 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: path.resolve(__dirname, './src/assets/favicon.ico'),
        }),
        new CopyPlugin({
            patterns: [
              { from: "./src/images.json", to: "./assets" },
              { from: "./src/assets", to: "./assets" },
              { 
                from: path.resolve(__dirname, 'src/assets'),
                to: path.resolve(__dirname, 'dist/assets'),
                noErrorOnMissing: true,
              },
            ],
          }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
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
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.plugins.push(new MiniCssExtractPlugin());
    }
    return config;
};
