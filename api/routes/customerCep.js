module.exports = app => {
    const controller = require('../controllers/customerCep')();
  
    app.route('/api/v1/customer-cep/:cep')
      .get(controller.listCep);
  }

