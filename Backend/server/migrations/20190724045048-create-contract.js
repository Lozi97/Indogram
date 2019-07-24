'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contracts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CompanyName: {
        type: Sequelize.STRING
      },
      UserFullName: {
        type: Sequelize.STRING
      },
      CompanyInstaName: {
        type: Sequelize.STRING
      },
      UserInstaUsername: {
        type: Sequelize.STRING
      },
      ServiceReleaseDate: {
        type: Sequelize.DATE
      },
      PaymentAmount: {
        type: Sequelize.INTEGER
      },
      EndersmentID: {
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
    return queryInterface.dropTable('Contracts');
  }
};