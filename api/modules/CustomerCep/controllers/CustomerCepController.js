const CustomerCepService = require('../services/CustomerCepService');

module.exports = () => {
  const controller = {};

  controller.listCep = async (req, res) => {
    const { cep } = req.params;

    const buscaCep = await CustomerCepService(cep);

    if (buscaCep.cep === undefined) {
      return res.status(400).json({ error: 'cep invalido' });
    }
    return res.status(200).json(buscaCep);
  };

  return controller;
};
