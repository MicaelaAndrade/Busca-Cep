const request = require("supertest");
const app = require('../../../config/express')()


// Teste Integração 
describe('testando rota cep',()=>{
    it('buscando cep', async () => {
        const valor = await request(app).get("/customer-cep/21235280");
        expect(valor.status).toBe(200)
    });

    it('cep invalidado', async () => {
        const valor = await request(app).get("/customer-cep/21235285");
        expect(valor.status).toBe(400)
    });
})
