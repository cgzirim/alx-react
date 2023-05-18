const path = require('path');

module.exports = {
  mode: "production",
  entry: "./js/dashboard_main.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  performance: {
    hints: false,
    maxAssetSize: 300000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["css-loader", "style-loader"]
	use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	// type: 'asset/resource',
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassingOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
