'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('scores', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    attempts: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    guess: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    time: {
      allowNull: false,
      type: Sequelize.DOUBLE,
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('scores'),
};
