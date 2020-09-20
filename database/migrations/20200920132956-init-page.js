'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE, JSON } = Sequelize

    await queryInterface.createTable('page', {
      id: {
        type: INTEGER(8).ZEROFILL,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      description: STRING,
      data: {
        type: JSON,
        allowNull: false,
      },
      created_at: DATE,
      updated_at: DATE,
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable('page')
  },
}
