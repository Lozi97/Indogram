'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Endorsements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CompanyInstaUsername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      NameOfEndorsement: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TypeOfEndorsement: {
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
      EndorsementNeeded: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ImageURI: {
        type: Sequelize.STRING
      },
      FilePDF: {
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
    return queryInterface.dropTable('Endorsements');
  }
};
