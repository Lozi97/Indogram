'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      InstaUsername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      FullName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      #OfFollwers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      AccountStartDate: {
        type: Sequelize.DATE
      },
      Age: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      Location: {
        type: Sequelize.STRING
      },
      Email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      PhoneNumber: {
        type: Sequelize.INTEGER
      },
      Gender: {
        type: Sequelize.BOOLEAN
      },
      TypeOfInfluencers: {
        type: Sequelize.STRING
      },
      OverAllRating: {
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
    return queryInterface.dropTable('Users');
  }
};
