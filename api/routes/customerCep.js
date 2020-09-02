<<<<<<< HEAD
const { server } = require('@hapi/hapi');

module.exports = app => {

  const controller = require('../controllers/customerCep')();


//   // forma hapi
//   app.route({
//     method: 'GET',
//     path: '/api/v1/customer-cep/:cep',
//     handler: (request, h) => (controller.listCep).find(request, h)
// })
  

  //forma express
  app.route('/customer-cep/:cep')
    .get(controller.listCep)

}




 
=======
module.exports = app => {
    const controller = require('../controllers/customerCep')();
  
    app.route('/api/v1/customer-cep/:cep')
      .get(controller.listCep);
  }

>>>>>>> a16f6b336d9d596bd909347a0668e25b11cd0d36
