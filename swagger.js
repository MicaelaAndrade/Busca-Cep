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
  host: 'localhost:3001',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  security: [
    {
      Bearer: [],
    },
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  // eslint-disable-next-line global-require
  require('./index.js');
});
