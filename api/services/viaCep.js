const fetch = require('node-fetch');

/**
 * @typedef Endereco
 * @prop {string} cep
 * @prop {string} logradouro
 * @prop {string} bairro
 * @prop {string} localidade
 * @prop {string} uf
 */

/**
 * buscando os dados informado 
 * 
 * @param {string} cep 
 * @returns {Promise<Endereco>}
 */
const viaCep = async (cep) => {

    const cleanCep = cep.replace('-', '');
    const url = `https://viacep.com.br/ws/${cleanCep}/json/`;

    const response = await fetch(url)

    const data = await response.json()


    return {
      cep: data.cep,
      logradouro: data.logradouro,
      bairro: data.bairro,
      localidade: data.localidade,
      uf: data.uf
    }
  };

module.exports = viaCep;





