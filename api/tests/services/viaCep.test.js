
const viaCep = require('../../services/viaCep')


// Teste unitário
test('buscando cep', async () => {
    const cep = '21235280';

    /** @type {Endereco} */
    const endereco = await viaCep(cep);

    expect(endereco).toBeDefined();
    expect(endereco.cep).toBe('21235-280')
    console.log(endereco)

});