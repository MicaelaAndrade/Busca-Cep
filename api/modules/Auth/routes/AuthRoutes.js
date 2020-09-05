const AuthController = require('../controllers/AuthController')();
// #swagger.start
module.exports = app => {
  /*
  #swagger.tags = ['Auth']
  #swagger.path = '/auth'
    #swagger.method = 'get'
  */
  app.get('/auth', AuthController.getToken);
};
// #swagger.end
