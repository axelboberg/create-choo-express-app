/**
 * Axel Boberg © 2018
 */

const choo = require('choo')
const app = choo()

/**
 * Require global styling
 */
require('./style.css')

/**
 * Init stores
 */
require('./stores')(app)

/**
 * Init routes
 */
require('./routes')(app)

if (!module.parent) {
  /**
   * Mount application to div
   */
  app.mount('div')
} else {
  /**
   * Allow for isomorphic rendering
   */
  module.exports = app
}
