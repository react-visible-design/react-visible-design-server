### 安装依赖
`npm install --save egg-sequelize mysql2`


### 新增插件 config/plugin.js
```js
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
```

### 增加配置 config/config.default.js
```  js
config.sequelize = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  database: 'egg-sequelize-doc-default',
};
```

### 安装cli
`npm install --save-dev sequelize-cli`

###  根目录下增加cli配置
```js
'use strict';

const path = require('path');

module.exports = {
  config: path.join(__dirname, 'database/config.json'),
  'migrations-path': path.join(__dirname, 'database/migrations'),
  'seeders-path': path.join(__dirname, 'database/seeders'),
  'models-path': path.join(__dirname, 'app/model'),
};
```

### cli 初始化
```sh
npx sequelize init:config
npx sequelize init:migrations
npx sequelize init:seeders
```

### 新建一个migration
`npx sequelize migration:generate --name=init-users`
