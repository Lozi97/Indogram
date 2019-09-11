const model = require('../models')

const { User } = model;

class Users {


  
  static createUser(req, res) {
    const {  InstaUsername,FullName,ProfilePicture,Bio,Website,IsBusiness,NumberOfPosts,NumberOfFollows,NumberOfFollowers,AccountStartDate,Age,Location,Email,PhoneNumber,Gender,TypeOfInfluencers,OverAllRating } = req.body
      return User
        .create({
            InstaUsername,
            FullName,
            ProfilePicture,
            Bio,
            Website,
            IsBusiness,
            NumberOfPosts,
            NumberOfFollows,
            NumberOfFollowers,
            AccountStartDate,
            Age,
            Location,
            Email,
            PhoneNumber,
            Gender,
            TypeOfInfluencers,
            OverAllRating
          
        })
        .then(userData => res.status(201).send({
          success: true,
          message: 'User successfully created',
          userData
        }))
    }


    static getUsers(req, res) {
        return User
          .findAll()
          .then(users => res.status(200).send(users));
      }


    static updateUser(req, res) {
        const {  InstaUsername,FullName,ProfilePicture,Bio,Website,IsBusiness,NumberOfPosts,NumberOfFollows,NumberOfFollowers,AccountStartDate,Age,Location,Email,PhoneNumber,Gender,TypeOfInfluencers,OverAllRating  } = req.body
        return User
          .findByPk(req.params.userId)
          .then((user) => {
            user.update({
                InstaUsername: InstaUsername || user.InstaUsername,
                FullName: FullName || user.FullName,
                ProfilePicture: ProfilePicture || user.ProfilePicture,
                Bio: Bio || user.Bio,
                Website: Website || user.Website,
                IsBusiness: IsBusiness || user.IsBusiness,
                NumberOfPosts: NumberOfPosts || user.NumberOfPosts,
                NumberOfFollows: NumberOfFollows || user.NumberOfFollows,
                NumberOfFollowers: NumberOfFollowers || user.NumberOfFollowers,
                AccountStartDate: AccountStartDate || user.AccountStartDate,
                Age: Age || user.Age,
                Location: Location || user.Location,
                Email: Email || user.Email,
                PhoneNumber: PhoneNumber || user.PhoneNumber,
                Gender: Gender || user.Gender,
                TypeOfInfluencers: TypeOfInfluencers || user.TypeOfInfluencers,
                OverAllRating: OverAllRating || user.OverAllRating

            })
            .then((updatedUser) => {
              res.status(200).send({
                message: 'User updated successfully',
                data: {
                    InstaUsername: InstaUsername || updatedUser.InstaUsername,
                    FullName: FullName || updatedUser.FullName,
                    ProfilePicture: ProfilePicture || updatedUser.ProfilePicture,
                    Bio: Bio || updatedUser.Bio,
                    Website: Website || updatedUser.Website,
                    IsBusiness: IsBusiness || updatedUser.IsBusiness,
                    NumberOfPosts: NumberOfPosts || updatedUser.NumberOfPosts,
                    NumberOfFollows: NumberOfFollows || updatedUser.NumberOfFollows,
                    NumberOfFollowers: NumberOfFollowers || updatedUser.NumberOfFollowers,
                    AccountStartDate: AccountStartDate || updatedUser.AccountStartDate,
                    Age: Age || updatedUser.Age,
                    Location: Location || updatedUser.Location,
                    Email: Email || updatedUser.Email,
                    PhoneNumber: PhoneNumber || updatedUser.PhoneNumber,
                    Gender: Gender || updatedUser.Gender,
                    TypeOfInfluencers: TypeOfInfluencers || updatedUser.TypeOfInfluencers,
                    OverAllRating: OverAllRating || updatedUser.OverAllRating
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }


    static deleteUser(req, res) {
        return User
          .findByPk(req.params.userId)
          .then(user => {
            if(!user) {
              return res.status(400).send({
              message: 'User Not Found',
              });
            }
            return user
              .destroy()
              .then(() => res.status(200).send({
                message: 'User successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }  


      static getUser(req, res) {
        return User
          .findByPk(req.params.userId)
          .then(user => {
            if(!user) {
              return res.status(400).send({
              message: 'User Not Found',
              });
            }
            return res.status(200).send({
              message: 'User Found',
              user
              }); 
          })
          .catch(error => res.status(400).send(error))
      }  
}

module.exports = Users;