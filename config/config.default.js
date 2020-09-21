/* eslint valid-jsdoc: "off" */

'use strict'

module.exports = appInfo => {
  const config = {
    security: {
      csrf: {
        enable: false,
      },
    },
    keys: appInfo.name + '_1571582766788_6866',
    session: {
      key: 'guid',
      maxAge: 24 * 3600 * 1000, // 1 天
      httpOnly: true,
      encrypt: true,
    },
    sequelize: {
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'react-visible-design',
      username: 'root',
      password: '123456',
      define: {
        underscored: true, //  驼峰式字段被默认转为下划线
        freezeTableName: true, // 防止修改表名为复数
      },
      timezone: '+08:00', // 保存为本地时区
      dialectOptions: {
        dateStrings: true,
        typeCast(field, next) {
          // for reading from database
          if (field.type === 'DATETIME') {
            return field.string()
          }
          return next()
        },
      },
    },
    middleware: ['errorHandler'],
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig,
  }
}
