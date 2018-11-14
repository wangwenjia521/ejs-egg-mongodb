'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router,controller } = app;
  router.get('/', controller.home.index);
  router.get('/post', controller.post.index);
  router.get('/post/:id', controller.post.edit);
  router.get('/post/delete/:id', controller.post.delete);
  router.post('/post/update/:id', controller.post.update);
  router.post('/post/create', controller.post.create);
};