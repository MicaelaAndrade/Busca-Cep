

module.exports = app => {

  const controller = require('../controllers/customerCep')();
  
  // Rota criada, para acessar no navegador
  app.route('/customer-cep/:cep')
    .get(controller.listCep)

}




 
