'use strict';
module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define('Proposal', {

    CompanyInstaUsername: {
      type: DataTypes.STRING,
      references: 'Company',
      referencesKey: 'username'
    },
    EndorsementID: {
      type: DataTypes.INTEGER,
      references: 'Endorsement',
      referencesKey: 'id'
    },    
    ProposalDescription: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your proposal description'
      },
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'What is the status?'
      }

    },
    budget: {
      type: DataTypes.INTEGER,

    },
    TypeOfProposal: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'What type of proposal is this?'
      }

    },
    ReleaseDate: {
      type: DataTypes.DATE,
      // allowNull: {
      //   args: false,
      //   msg: 'What is the release date?'
      // }

    },
    Duration: {
      type: DataTypes.INTEGER,
    },


  }, {});
  Proposal.associate = function(models) {
    // associations can be defined here
  };
  return Proposal;
};
