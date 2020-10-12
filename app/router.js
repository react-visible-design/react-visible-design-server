'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router } = app
  router.get('/', 'home.index')
  router.put('/api/update-page-data/:id', 'page.updatePageData')
  router.resources('page', '/api/page', 'page')
}
