<<<<<<< HEAD
'use strict'

const app = require('./config/express')()
const port = app.get('port')
const Hapi = require('@hapi/hapi')


//forma express 
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});


// // form hapi
// const init = async () => {

//   const server = Hapi.server({
//     host: 'localhost',
//     port
// })

//   await server.start()
//   console.log(`Servidor rodando na porta ${port}`)
// }

//init()
=======
const app = require('./config/express')();
const port = app.get('port');


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
>>>>>>> a16f6b336d9d596bd909347a0668e25b11cd0d36
