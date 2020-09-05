const CustomerCepService = require('../CustomerCepService');

// Teste unitário
test('buscando cep', async () => {
  const cep = '21235280';

  /** @type {Endereco} */
  const endereco = await CustomerCepService(cep);

  expect(endereco).toBeDefined();
  expect(endereco.cep).toBe('21235-280');
  expect(endereco.cep).toMatchSnapshot();
});
