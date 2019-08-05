'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.*/

   //logic for transforming into the new state
    return queryInterface.addColumn(
      'Endorsements',
      'status',{
     type: Sequelize.STRING
      }
    );
    
    //  Example:
      //return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.*/
  return queryInterface.removeColumn(
      'Endorsements',
      'status'
    );
    /*
      Example:
      return queryInterface.dropTable('users');
    */
  }
};
