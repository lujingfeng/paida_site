/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  const mysqlConfig = {
    mysql: {
      // database configuration
      client: {
        // host
        host: process.env.DB_HOST,
        // port
        port: "3306",
        // username
        user: process.env.DB_USER,
        // password
        password: process.env.DB_PASS,
        // database
        database: process.env.DB_DATABASE,
      },
      // load into app, default is open
      app: true,
      // load into agent, default is close
      agent: false,
    },
  };

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    ...mysqlConfig,
    cluster: {
      listen: {
        port: 9000,
      },
    },
  });

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_cooke123";

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
