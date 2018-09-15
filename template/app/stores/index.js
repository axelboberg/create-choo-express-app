/**
 * Axel Boberg © 2018
 */

/**
 * Require all stores that
 * the app should use
 */
const STORES = [
  // require('./store.js')
]

module.exports = app => {
  /**
   * Add all stores to the app
   */
  for (let store of STORES) {
    app.use(store)
  }
}
