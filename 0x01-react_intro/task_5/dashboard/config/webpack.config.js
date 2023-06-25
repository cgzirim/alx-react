const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    devServer: {
        static: './dist',
        hot: true
    },
    entry: './src/index.js',
    // entry: {
    //     main: path.resolve(__dirname, './src/index.js'),
    // },
    // output: {
    //   filename: '[name].bundle.js',
    //   path: path.resolve(__dirname, 'deploy')
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                      disable: true,
                    },
                  },
                ]
            },
        ]
    },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Webpack Output",
  //   }),
  // ],
};