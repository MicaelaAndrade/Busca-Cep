module.exports = () => {
  
  const viaCep = require('../services/viaCep')
  const controller = {};

  controller.listCep = async (req, res) => {

    const { cep } = req.params

    const data = await viaCep(cep)

    return res.status(200).json(data)
  }

  return controller;
<<<<<<< HEAD
}



=======
}
>>>>>>> a16f6b336d9d596bd909347a0668e25b11cd0d36
