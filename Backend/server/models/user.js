'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    InstaUsername: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the users Instagram'
      },
      unique: {
        args: true,
        msg: 'Username already exists'
      },
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    ProfilePicture: {
      type: DataTypes.STRING,

    },
    Bio: {
      type: DataTypes.STRING,

    },
    Website: {
      type: DataTypes.STRING,

    },
    IsBusiness: {
      type: DataTypes.BOOLEAN,

    },
    NumberOfPosts: {
      type: DataTypes.INTEGER,

    },
    NumberOfFollows: {
      type: DataTypes.INTEGER,

    },
    NumberOfFollowers: {
      type: DataTypes.INTEGER,
      // allowNull: {
      //   args: false,
      //   msg: 'Please enter the follower account'
      // },
    },
    AccountStartDate: {
      type: DataTypes.DATE,

    },
    Age: {
      type: DataTypes.INTEGER,
      // allowNull: {
      //   args: false,
      //   msg: 'Please enter your age'
      // },

    },
    Location: {
      type: DataTypes.STRING,

    },
    Email: {
      type: DataTypes.STRING,
      // allowNull: {
      //   args: false,
      //   msg: 'Please enter your email address'
      // },
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

    PhoneNumber: {
      type: DataTypes.INTEGER,
    },

    Gender: {
      type: DataTypes.BOOLEAN,
    },

    TypeOfInfluencers: {
      type: DataTypes.STRING,
    },

    OverAllRating: {
      type: DataTypes.INTEGER,
    },


  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
