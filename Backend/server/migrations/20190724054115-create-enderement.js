'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Enderements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CompanyInstaUsername: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      NameOfEndersement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TypeOfEndersement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      MinFollower: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Budget: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      EndersementNeeded: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ImageURI: {
        type: Sequelize.STRING
      },
      File.PDF: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Enderements');
  }
};
