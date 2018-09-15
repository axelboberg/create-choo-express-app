/**
 * Axel Boberg © 2018
 */

const choo = require('choo')
const app = choo()

/**
 * Init stores
 */
require('./stores')(app)

/**
 * Init routes
 */
require('./routes')(app)

/**
 * Mount application to div
 */
app.mount('div')
