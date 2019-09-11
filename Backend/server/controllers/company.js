const model = require('../models')

const { Company } = model;

class Companies {
  static createCompany(req, res) {
    const { name, username, email, description, type, founder, phone, verify } = req.body
      return Company
        .create({
          name,
          username,
          email,
          description,
          type,
          founder,
          phone,
          verify
          
        } , {
          include: [ Endorsement ]
        })
        .then(companyData => res.status(201).send({
          success: true,
          message: 'Company successfully created',
          companyData
        }))
    }


    static getCompanies(req, res) {
        return Company
          .findAll()
          .then(companies => res.status(200).send(companies));
      }


    static updateCompany(req, res) {
        const {  name, username, email, description, type, founder, phone, verify } = req.body
        return Company
          .findByPk(req.params.companyId)
          .then((company) => {
            company.update({
                name: name || company.name,
                username: username || company.username,
                email: email || company.email,
              description: description || company.description,
              type: type || company.type,
              founder: founder || company.founder,
              phone: phone || company.phone,
              verify: verify || company.verify

            })
            .then((updatedCompany) => {
              res.status(200).send({
                message: 'Company updated successfully',
                data: {
                 name: name || updatedCompany.name,
                 username: username || updatedCompany.username,
                 email: email || updatedCompany.email,
                 description: description || updatedCompany.description,
                 type: type || updatedCompany.type,
                 founder: founder || updatedCompany.founder,
                 phone: phone || updatedCompany.phone,
                 verify: verify || updatedCompany.verify
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }


    static deleteCompany(req, res) {
        return Company
          .findByPk(req.params.companyId)
          .then(company => {
            if(!company) {
              return res.status(400).send({
              message: 'Company Not Found',
              });
            }
            return company
              .destroy()
              .then(() => res.status(200).send({
                message: 'Company successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }  

      static getCompany(req, res) {
        return Company
          .findByPk(req.params.companyId)
          .then(company => {
            if(!company) {
              return res.status(400).send({
              message: 'company Not Found',
              });
            }
            return res.status(200).send({
              message: 'company Found',
              company
              }); 
          })
          .catch(error => res.status(400).send(error))
      }  
}

module.exports = Companies;