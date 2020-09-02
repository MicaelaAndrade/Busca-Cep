const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  // aplicação
  app.set('port', process.env.PORT || config.get('server.port'));

  //  middlewares
  app.use(bodyParser.json());

  require('../api/routes/customerCep')(app);

  return app;
};