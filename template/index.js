/**
 * Axel Boberg © 2018
 */

/**
 * Config environment-variables
 * stored in a .env-file
 */
require('dotenv').config()

const path = require('path')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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

/**
 * Respond with the client-app
 * on all requests
 */
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, './dist/index.html'))
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
