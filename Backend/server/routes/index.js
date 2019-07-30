const Companies = require('../controllers/company')
const Users = require('../controllers/user')
const Proposals = require('../controllers/proposal')
const Endorsements = require('../controllers/endorsement')
const Ratings = require('../controllers/rating')

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));


  ////////////////   Company   //////////////////////
  app.post('/api/companies', Companies.createCompany); // API route for user to signup
  app.get('/api/companies', Companies.getCompanies); // API route for user to get all books in the database
  app.put('/api/companies/:companyId', Companies.updateCompany); // API route for user to edit a book
  app.delete('/api/companies/:companyId', Companies.deleteCompany); // API route for user to delete a book

   ////////////////   User   //////////////////////
   app.post('/api/users', Users.createUser); // API route for user to signup
   app.get('/api/users', Users.getUsers); // API route for user to get all books in the database
   app.put('/api/users/:userId', Users.updateUser); // API route for user to edit a book
   app.delete('/api/users/:userId', Users.deleteUser); // API route for user to delete a book


    ////////////////   Proposal   //////////////////////
    app.post('/api/proposals', Proposals.createProposal); // API route for user to signup
    app.get('/api/proposals', Proposals.getProposals); // API route for user to get all books in the database
    app.put('/api/proposals/:proposalId', Proposals.updateProposal); // API route for user to edit a book
    app.delete('/api/proposals/:proposalId', Proposals.deleteProposal); // API route for user to delete a book


     ////////////////   Endorsement   //////////////////////
     app.post('/api/endorsements', Endorsements.createEndorsement); // API route for user to signup
     app.get('/api/endorsements', Endorsements.getEndorsements); // API route for user to get all books in the database
     app.put('/api/endorsements/:endorsementId', Endorsements.updateEndorsement); // API route for user to edit a book
     app.delete('/api/endorsements/:endorsementId', Endorsements.deleteEndorsement); // API route for user to delete a book
 

     ////////////////   Rating   //////////////////////
     app.post('/api/ratings', Ratings.createRating); // API route for user to signup
     app.get('/api/ratings', Ratings.getRatings); // API route for user to get all books in the database
     app.put('/api/ratings/:ratingId', Ratings.updateRating); // API route for user to edit a book
     app.delete('/api/ratings/:ratingId', Ratings.deleteRating); // API route for user to delete a book
 
 
};