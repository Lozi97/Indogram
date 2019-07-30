const model = require('../models')

const { Rating } = model;

class Ratings {
  static createRating(req, res) {
    const {  NRating,UserInstaUsername,CompanyInstaUsername } = req.body
      return Rating
        .create({
            NRating,
            UserInstaUsername,
            CompanyInstaUsername
          
        })
        .then(ratingData => res.status(201).send({
          success: true,
          message: 'Rating successfully created',
          ratingData
        }))
    }


    static getRatings(req, res) {
        return Rating
          .findAll()
          .then(ratings => res.status(200).send(ratings));
      }


    static updateRating(req, res) {
        const { NRating,UserInstaUsername,CompanyInstaUsername} = req.body
        return Rating
          .findByPk(req.params.ratingId)
          .then((rating) => {
            rating.update({
                NRating: NRating || rating.NRating,
                UserInstaUsername: UserInstaUsername || rating.UserInstaUsername,
                CompanyInstaUsername: CompanyInstaUsername || rating.CompanyInstaUsername,
   

            })
            .then((updatedRating) => {
              res.status(200).send({
                message: 'Rating updated successfully',
                data: {
                    NRating: NRating || updatedRating.NRating,
                    UserInstaUsername: UserInstaUsername || updatedRating.UserInstaUsername,
                    CompanyInstaUsername: CompanyInstaUsername || updatedRating.CompanyInstaUsername,
        }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }


    static deleteRating(req, res) {
        return Rating
          .findByPk(req.params.ratingId)
          .then(rating => {
            if(!rating) {
              return res.status(400).send({
              message: 'Rating Not Found',
              });
            }
            return rating
              .destroy()
              .then(() => res.status(200).send({
                message: 'Rating successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }  
}

module.exports = Ratings;