const jwtk = require('jsonwebtoken');
const request = require('supertest');
const app = require('../../../../config/express')();
// eslint-disable-next-line import/order
const nock = require('nock');

const { secret, ttl } = require('../../../../config/auth');

const token = jwtk.sign({}, secret, { expiresIn: ttl });

describe('testando rota cep', () => {
  it('token obrigatorio', async () => {
    const retornoCep = await request(app).get('/customer-cep/21235289');
    expect(retornoCep.status).toBe(401);
    expect(JSON.parse(retornoCep.text).error).toBe('token obrigatório');
  });

  it('token invalido', async () => {
    const retornoCep = await request(app)
      .get('/customer-cep/21235289')
      .set('Authorization', 'bearer 123');
    expect(retornoCep.status).toBe(401);
    expect(JSON.parse(retornoCep.text).error).toBe('token invalido');
  });
  it('retorna o status 400 cep invalido', async () => {
    const Mock = {
      cep: undefined,
      logradouro: undefined,
      bairro: undefined,
      localidade: undefined,
      uf: undefined,
    };

    nock(`https://viacep.com.br/ws`).get('/21235289/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/21235280/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/21235200/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/21235000/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/21230000/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/21200000/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/21000000/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/20000000/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/00000000/json/').reply(200, Mock);

    const retornoCep = await request(app)
      .get('/customer-cep/21235289')
      .set('Authorization', `bearer ${token}`);
    expect(retornoCep.status).toBe(400);
  });

  it('tenta encontrar cep validado, caso sucesso retorna 200', async () => {
    const Mock = {
      cep: undefined,
      logradouro: undefined,
      bairro: undefined,
      localidade: undefined,
      uf: undefined,
    };

    nock(`https://viacep.com.br/ws`).get('/25369874/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/25369870/json/').reply(200, Mock);
    nock(`https://viacep.com.br/ws`).get('/25369800/json/').reply(200, {
      cep: '25369-800',
      logradouro: 'Rua Padre Conrado',
      bairro: 'Vila Santos Dumont',
      localidade: 'Franca',
      uf: 'SP',
    });

    const retornoCep = await request(app)
      .get('/customer-cep/25369874')
      .set('Authorization', `bearer ${token}`);
    expect(retornoCep.status).toBe(200);
  });

  it('retorna o status 200 cep é valido', async () => {
    nock('https://viacep.com.br/ws').get('/14405275/json/').reply(200, {
      cep: '14405-275',
      logradouro: 'Rua Padre Conrado',
      bairro: 'Vila Santos Dumont',
      localidade: 'Franca',
      uf: 'SP',
    });

    const retornoCep = await request(app)
      .get('/customer-cep/14405275')
      .set('Authorization', `bearer ${token}`);
    expect(retornoCep.status).toBe(200);
  });
});
