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
const BuscaCep = async cep => {
  const cleanCep = cep.replace('-', '');
  const url = `https://viacep.com.br/ws/${cleanCep}/json/`;

  const response = await fetch(url);

  const data = await response.json();

  // informando os dados
  return {
    cep: data.cep,
    logradouro: data.logradouro,
    bairro: data.bairro,
    localidade: data.localidade,
    uf: data.uf,
  };
};

const replaceAt = function (index, text, replacement) {
  if (index >= text.length) {
    return text.valueOf();
  }

  const chars = text.split('');
  chars[index] = replacement;
  return chars.join('');
};

/*
	Regra de negocio
*/
const CustomerCepServer = async (cep, level = 7) => {
  const cepData = await BuscaCep(cep);

  if (cepData.cep === undefined && cep !== '00000000') {
    const novoCep = replaceAt(level, cep, 0);
    const novoresponse = await CustomerCepServer(novoCep, level - 1);
    return novoresponse;
  }
  return cepData;
};

module.exports = CustomerCepServer;
