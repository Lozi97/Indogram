const model = require('../models')

const { Proposal } = model;

class Proposals {
  static createProposal(req, res) {
    const {  CompanyInstaUsername,EndorsementID,ProposalDescription,Status,budget,TypeOfProposal,ReleaseDate,Duration} = req.body
      return Proposal
        .create({
            CompanyInstaUsername,
            EndorsementID,
            ProposalDescription,
            Status,
            budget,
            TypeOfProposal,
            ReleaseDate,
            Duration
          
        })
        .then(proposalData => res.status(201).send({
          success: true,
          message: 'Proposal successfully created',
          proposalData
        }))
    }


    static getProposals(req, res) {
        return Proposal
          .findAll()
          .then(proposals => res.status(200).send(proposals));
      }


    static updateProposal(req, res) {
        const { CompanyInstaUsername,EndorsementID,ProposalDescription,Status,budget,TypeOfProposal,ReleaseDate,Duration} = req.body
        return Proposal
          .findByPk(req.params.proposalId)
          .then((proposal) => {
            proposal.update({
                CompanyInstaUsername: CompanyInstaUsername || proposal.CompanyInstaUsername,
                EndorsementID: EndorsementID || proposal.EndorsementID,
                ProposalDescription: ProposalDescription || proposal.ProposalDescription,
                Status: Status || proposal.Status,
                budget: budget || proposal.budget,
                TypeOfProposal: TypeOfProposal || proposal.TypeOfProposal,
                ReleaseDate: ReleaseDate || proposal.ReleaseDate,
                Duration: Duration || proposal.Duration

            })
            .then((updatedProposal) => {
              res.status(200).send({
                message: 'Proposal updated successfully',
                data: {
                    CompanyInstaUsername: CompanyInstaUsername || updatedProposal.CompanyInstaUsername,
                    EndorsementID: EndorsementID || updatedProposal.EndorsementID,
                    ProposalDescription: ProposalDescription || updatedProposal.ProposalDescription,
                    Status: Status || updatedProposal.Status,
                    budget: budget || updatedProposal.budget,
                    TypeOfProposal: TypeOfProposal || updatedProposal.TypeOfProposal,
                    ReleaseDate: ReleaseDate || updatedProposal.ReleaseDate,
                    Duration: Duration || updatedProposal.Duration
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }


    static deleteProposal(req, res) {
        return Proposal
          .findByPk(req.params.proposalId)
          .then(proposal => {
            if(!proposal) {
              return res.status(400).send({
              message: 'Proposal Not Found',
              });
            }
            return proposal
              .destroy()
              .then(() => res.status(200).send({
                message: 'Proposal successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }  
}

module.exports = Proposals;