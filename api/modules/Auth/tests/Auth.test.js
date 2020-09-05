const request = require('supertest');
const app = require('../../../../config/express')();

describe('testando rota cep', () => {
  it('retorna o status 200 cep é valido', async () => {
    const retornoCep = await request(app).get('/customer-cep/21235280');
    expect(retornoCep.status).toBe(200);
  });

  it('retorna o status 400 cep invalido', async () => {
    const retornoCep = await request(app).get('/customer-cep/21235289');
    expect(retornoCep.status).toBe(400);
  });
});
