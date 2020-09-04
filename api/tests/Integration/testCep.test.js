const request = require("supertest");
const app = require('../../../config/express')()


// Teste Integração 

// Cep correto 
describe('testando rota cep',()=>{
    it('buscando cep', async () => {
        const valor = await request(app).get("/customer-cep/21235280");
        expect(valor.status).toBe(200)
    });

// Cep invalidado    
    it('cep invalidado', async () => {
        const valor = await request(app).get("/customer-cep/21235289");
        expect(valor.status).toBe(400)
    });
})
