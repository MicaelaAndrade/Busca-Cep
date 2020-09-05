const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const CustomerCepRoutes = require('../api/modules/CustomerCep/routes/CustomerCepRoutes');
const AuthRoutes = require('../api/modules/Auth/routes/AuthRoutes');

module.exports = () => {
  const app = express();

  // aplicação
  app.set('port', process.env.PORT || config.get('server.port'));

  //  middlewares
  app.use(bodyParser.json());

  CustomerCepRoutes(app);
  AuthRoutes(app);

  return app;
};
