'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Proposals', {
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
      EndorsementID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ProposalDescription: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      budget: {
        type: Sequelize.INTEGER
      },
      TypeOfProposal: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ReleaseDate: {
        type: Sequelize.DATE
      },
      Duration: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Proposals');
  }
};
