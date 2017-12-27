const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require("webpack");

module.exports = {
  entry: {
      app: './src/app.js',
      vendor: ['angular', 'angular-route','bootstrap', 'lodash']
  },

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default']
      }),
      new CopyWebpackPlugin(
          [ {from: 'index.html'},
            {from: 'src/views', to: 'views'},
            {from: 'node_modules/bootstrap/dist/css/bootstrap.min.css'}
          ]
      ),
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
};



