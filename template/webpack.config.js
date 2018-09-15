/**
 * Axel Boberg © 2018
 */

const path = require('path')

// Plugins
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  let mode = 'production'
  if (env && env.NODE_ENV && env.NODE_ENV === 'development') {
    mode = 'development'
  }

  return {
    mode: mode,
    entry: './src/app',

    /**
     * Output bundled files in the
     * ./dist directory and prefix the name of .js
     * files with the current hash
     */
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[hash].[name].bundle.js'
    },

    plugins: [
      /**
       * Extract css into its own bundled file,
       * also prefixed with the current hash
       */
      new MiniCssExtractPlugin({
        filename: '[hash].[name].css'
      }),

      /**
       * Create a new html-file based on the
       * template in the ./app directory,
       * inject script- and link tags for the bundled
       * files
       */
      new HtmlWebpackPlugin({
        inject: 'head',
        template: './src/app/index.html'
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },

        /**
         * Generate base64 strings of image-assets
         * with a size up to 8kb
         */
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              name: 'assets/[hash].[name].[ext]',
              limit: 8000
            }
          }]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: (mode === 'development')
        })
      ]
    }
  }
}
