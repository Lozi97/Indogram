'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {

    NRating: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'What is the rating'
      }
    },
    UserInstaUsername: {
      type: DataTypes.STRING,
      references: 'User',
      referencesKey: 'id'
    },

    CompanyInstaUsername: {
      type: DataTypes.INTEGER,
      references: 'Company',
      referencesKey: 'username'
    },

  }, {});
  Rating.associate = function(models) {
    // associations can be defined here
  };
  return Rating;
};
