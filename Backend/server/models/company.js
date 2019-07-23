'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {

    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your username'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email address'
      },
      unique: {
        args: true,
        msg: 'Email already exists'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
      },
    },
    description: {
      type: DataTypes.STRING,
     
    },
    type: {
      type: DataTypes.STRING,
     
    },
    founder: {
      type: DataTypes.STRING,
      
    },
    phone: {
      type: DataTypes.STRING,
      
    },
    verify: {
      type: DataTypes.BOOLEAN,
    },

 
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};