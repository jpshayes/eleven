const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/js/main.js", // JavaScript entry point
    styles: "./src/css/main.css", // CSS entry point
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js", // Output for JS files
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          "css-loader",
          {
            loader: "postcss-loader", // Processes CSS with PostCSS
            options: {
              postcssOptions: {
                plugins: [
                  require("postcss-import"),
                  require("tailwindcss"),
                  require("autoprefixer"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // Output file for CSS
    }),
  ],
};
