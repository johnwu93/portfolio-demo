/* eslint-disable */
const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
      handlebars: 'handlebars/dist/handlebars',
    },
    extensions: ['.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
};
