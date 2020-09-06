const request = require('supertest');
const app = require('../../../../config/express')();

describe('testando rota auth', () => {
  it('retorna o status 200 token é valido', async () => {
    const retornaToken = await request(app).get('/auth');
    expect(retornaToken.status).toBe(200);
  });
});
