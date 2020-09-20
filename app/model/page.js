'use strict'

module.exports = app => {
  const { STRING, INTEGER, JSON } = app.Sequelize
  const page = app.model.define('page', {
    id: {
      type: INTEGER(6).ZEROFILL,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    description: {
      type: STRING,
    },
    data: {
      type: JSON,
      allowNull: false,
    },
  })

  return page
}
