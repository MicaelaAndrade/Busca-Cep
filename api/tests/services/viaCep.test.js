
const viaCep = require('../../services/viaCep')


test('buscando cep', async () => {
    const cep = '21235280';
    
    /** @type {Endereco} */
    const endereco = await viaCep(cep);

    console.log(endereco) 
    
});