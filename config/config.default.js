'use strict';
module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523196159518_2034';
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  // add your config here
  config.middleware = [];
    
  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/blog',
    options: {
      server: {
        poolSize: 20
      },
    },
  };
  return config;
};