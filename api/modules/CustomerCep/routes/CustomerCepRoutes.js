const controller = require('../controllers/CustomerCepController')();
const AuthMiddleware = require('../../../middlewares/AuthMiddleware');

// #swagger.start
module.exports = app => {
  /*
  #swagger.tags = ['Customer CEP']
  #swagger.security = [{"Bearer":[]}]
  #swagger.path = '/customer-cep/{cep}'
    #swagger.method = 'get'
  */

  app.get('/customer-cep/:cep', AuthMiddleware, controller.listCep);
};
// #swagger.end
