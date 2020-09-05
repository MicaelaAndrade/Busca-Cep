const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './api/modules/CustomerCep/routes/CustomerCepRoutes.js',
  './api/modules/Auth/routes/AuthRoutes.js',
];

const doc = {
  info: {
    version: '1.0.0',
    title: 'API_NODE',
    description: 'Serviço busca de cep </b>.',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    api_key: {
      type: 'apiKey',
      name: 'api_key',
      in: 'header',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // eslint-disable-next-line global-require
  require('./index.js');
});
