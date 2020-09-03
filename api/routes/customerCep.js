

module.exports = app => {

  const controller = require('../controllers/customerCep')();
  
  app.route('/customer-cep/:cep')
    .get(controller.listCep)

}




 
