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

  const alinode = {
    alinode: {
      // 从 `Node.js 性能平台` 获取对应的接入参数
      appid: "93976",
      secret: "b12dfe396d9caf7b0fd36a76d3ec9698b97c2f41",
    },
  };

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {
    ...mysqlConfig,
    ...alinode,
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
