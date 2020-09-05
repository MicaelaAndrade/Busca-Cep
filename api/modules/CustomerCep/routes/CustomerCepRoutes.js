const controller = require('../controllers/CustomerCepController')();
const AuthMiddleware = require('../../../middlewares/AuthMiddleware');

module.exports = app => {
  // Rota criada, para acessar no navegador
  app.get('/customer-cep/:cep', AuthMiddleware, controller.listCep);
};
