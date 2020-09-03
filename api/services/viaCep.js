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
 * @returns {Promise<Endereco>}s
 */
const viaCep = async (cep) => {

  const cleanCep = cep.replace('-', '');
  const url = `https://viacep.com.br/ws/${cleanCep}/json/`;
  const response = await fetch(url)
  const data = await response.json()

  String.prototype.replaceAt = function (index, replaceAt) {
    if (index >= this.length) {
      return this.valueOf()
    }

    return this.substring(0, index) + replacement + this.substring(index + 1)
  }

  let str = data.cep
  str = str.replace(cep[7], 0)
  console.log(str)

  return {
    cep: data.cep,
    logradouro: data.logradouro,
    bairro: data.bairro,
    localidade: data.localidade,
    uf: data.uf
  }
};

module.exports = viaCep;





