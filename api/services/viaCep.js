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
<<<<<<< HEAD
 * buscando os dados informado 
=======
 * Busca um endereço a partir de um CEP
>>>>>>> a16f6b336d9d596bd909347a0668e25b11cd0d36
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

<<<<<<< HEAD
module.exports = viaCep;





=======
module.exports = viaCep;
>>>>>>> a16f6b336d9d596bd909347a0668e25b11cd0d36
