const Companies = require('../controllers/company')

module.exports = (app) => {

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the BookStore API!',
  }));

  app.post('/api/companies', Companies.createCompany); // API route for user to signup
  app.get('/api/companies', Companies.getCompaines); // API route for user to get all books in the database
  app.put('/api/companies/:companyId', Companies.updateCompany); // API route for user to edit a book
  app.delete('/api/companies/:companyId', Companies.deleteCompany); // API route for user to delete a book

};