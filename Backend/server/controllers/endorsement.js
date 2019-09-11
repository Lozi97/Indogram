const model = require('../models')

const { Endorsement } = model;
//const { Company } = model;

class Endorsements {
  static createEndorsement(req, res) {
   // var Creator = Endorsement.belongsTo(Company, {as: 'creator'});
    const { CompanyInstaUsername, NameOfEndorsement, Description, TypeOfEndorsement, MinFollower, Budget, EndorsementNeeded, ImageURI,FilePDF,status } = req.body
      return Endorsement
        .create({
            CompanyInstaUsername,
             NameOfEndorsement, 
             Description, 
             TypeOfEndorsement,
             MinFollower,
             Budget, 
             EndorsementNeeded, 
             ImageURI,
             FilePDF,
             status 
          
        }
        // , {include: [{
        //   model: Company,
        //   where: { username: CompanyInstaUsername } //
        // }]
        //}
        )
        .then(endorsementData => res.status(201).send({
          success: true,
          message: 'Endorsement successfully created',
          endorsementData
        }))
    }


    static getEndorsements(req, res) {
        return Endorsement
          .findAll()
          .then(endorsements => res.status(200).send(endorsements));
      }


    static updateEndorsement(req, res) {
        const {  CompanyInstaUsername, NameOfEndorsement, Description, TypeOfEndorsement, MinFollower, Budget, EndorsementNeeded, ImageURI,FilePDF,status  } = req.body
        return Endorsement
          .findByPk(req.params.endorsementId)
          .then((endorsement) => {
            endorsement.update({
                CompanyInstaUsername: CompanyInstaUsername || endorsement.CompanyInstaUsername,
                NameOfEndorsement: NameOfEndorsement || endorsement.NameOfEndorsement,
                Description: Description || endorsement.Description,
                TypeOfEndorsement: TypeOfEndorsement || endorsement.TypeOfEndorsement,
                MinFollower: MinFollower || endorsement.MinFollower,
                Budget: Budget || endorsement.Budget,
                EndorsementNeeded: EndorsementNeeded || endorsement.EndorsementNeeded,
                ImageURI: ImageURI || endorsement.ImageURI,
                FilePDF: FilePDF || endorsement.FilePDF,
                status: status || endorsement.status


            })
            .then((updatedEndorsement) => {
              res.status(200).send({
                message: 'Endorsement updated successfully',
                data: {
                    CompanyInstaUsername: CompanyInstaUsername || updatedEndorsement.CompanyInstaUsername,
                NameOfEndorsement: NameOfEndorsement || updatedEndorsement.NameOfEndorsement,
                Description: Description || updatedEndorsement.Description,
                TypeOfEndorsement: TypeOfEndorsement || updatedEndorsement.TypeOfEndorsement,
                MinFollower: MinFollower || updatedEndorsement.MinFollower,
                Budget: Budget || updatedEndorsement.Budget,
                EndorsementNeeded: EndorsementNeeded || updatedEndorsement.EndorsementNeeded,
                ImageURI: ImageURI || updatedEndorsement.ImageURI,
                FilePDF: FilePDF || updatedEndorsement.FilePDF,
                status: status || updatedEndorsement.status

                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }


    static deleteEndorsement(req, res) {
        return Endorsement
          .findByPk(req.params.endorsementId)
          .then(endorsement => {
            if(!endorsement) {
              return res.status(400).send({
              message: 'Endorsement Not Found',
              });
            }
            return endorsement
              .destroy()
              .then(() => res.status(200).send({
                message: 'Endorsement successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      } 
      
      static getEndorsement(req, res) {
        return Endorsement
          .findByPk(req.params.endorsementId)
          .then(endorsement => {
            if(!endorsement) {
              return res.status(400).send({
              message: 'Endorsement Not Found',
              });
            }
            return res.status(200).send({
              message: 'Endorsement Found',
              endorsement
              }); 
          })
          .catch(error => res.status(400).send(error))
      }  

      static getEndorsementByUsername(req, res) {
        return Endorsement
          .findOne({where: {CompanyInstaUsername:req.params.username}})
          .then(endorsement => {
            if(!endorsement) {
              return res.status(400).send({
              message: 'Endorsement Not Found',
              });
            }
            return res.status(200).send({
              message: 'Endorsement Found',
              endorsement
              }); 
          })
          .catch(error => res.status(400).send(error))
      }  
}

module.exports = Endorsements;