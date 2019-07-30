'use strict';
module.exports = (sequelize, DataTypes) => {
  const Endorsement = sequelize.define('Endorsement', {

    CompanyInstaUsername: {
      type: DataTypes.STRING,
      references: 'Company',
      referencesKey: 'username'
    },        
    NameOfEndorsement: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the name of the Endersement'
      }
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter the description'
      },
    },
    TypeOfEndorsement: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'what type of endersement is this'
      },

    },
    MinFollower: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Atleast how many followers should the enderser have?'
      },

    },
    Budget: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'What is the budget for this endersement?'
      },

    },
    EndorsementNeeded: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Endersement needed?'
      },
    },
    ImageURI: {
      type: DataTypes.STRING,
    },

    FilePDF: {
      type: DataTypes.STRING,
    },


  }, {});
  Endorsement.associate = function(models) {
    // associations can be defined here
  };
  return Endorsement;
};
