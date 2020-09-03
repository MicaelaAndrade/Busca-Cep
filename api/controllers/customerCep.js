
module.exports = () => {

  

  const viaCep = require('../services/viaCep')
  const controller = {};

  controller.listCep = async (req, res) => {

    const { cep } = req.params

    const data = await viaCep(cep)

     res.status(200).json(data)
  }

  return controller;
}

