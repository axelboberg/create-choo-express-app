/**
 * Axel Boberg © 2018
 */

/**
 * Setup
 */
require('dotenv').config()
require('ignore-styles')

const path = require('path')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const client = require('./app')

/**
 * Setup Express to use body-parser
 * to parse request bodies using JSON
 */
app.use(bodyParser.json())

/**
 * Setup Express to serve static files
 * from the ./dist directory
 */
app.use(express.static(path.join(__dirname, './dist')))

app.get('/favicon.ico', (req, res, next) => {
  return res.send('Favicon not found').status(404)
})

/**
 * Require and use the asset-map from Webpack
 * to construct HTML-strings for the bundled files
 */
const assets = require('./assets.json')
const extHTML = {
  'css': path => {
    return `<link rel="stylesheet" href="${path}">`
  },
  'js': path => {
    return `<script src="${path}" defer></script>`
  }
}

const assetsHTML = assets.assets
  .map(asset => {
    const ext = /(?:([^.]+))?$/.exec(asset)[0]

    if (!extHTML[ext]) return ''
    return extHTML[ext](asset)
  })
  .join('')

/**
 * Render all pages with the client-app
 */
app.get('*', (req, res, next) => {
  return res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${assetsHTML}
      </head>
      <body>
        ${client.toString(req.path)}
      </body>
    </html>
  `)
})

/**
 * Use any port specified as an environment
 * variable or default to port 3000
 */
const port = process.env.port || 3000

/**
 * Start the application on
 * the specified port
 */
app.listen(port, err => {
  if (err) throw err
  console.log(`App listening on port ${port}`)
})
