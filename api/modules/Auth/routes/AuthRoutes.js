const AuthController = require('../controllers/AuthController')();

module.exports = app => {
  // rota token
  app.get('/auth', AuthController.getToken);
};
