/**
 * Axel Boberg © 2018
 */

/**
 * Declare all routes with their
 * respective path and view
 */
const ROUTES = {
  '/': require('./views/main.js')
}

module.exports = app => {
  /**
   * Route all routes to the app
   */
  for (let route in ROUTES) {
    app.route(route, ROUTES[route])
  }
}
