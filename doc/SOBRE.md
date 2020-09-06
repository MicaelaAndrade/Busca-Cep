[voltar](../README.md)
# Serviço de BUSCA CEP

## Expor um serviço de BUSCA DE CEP.

Serviço de API desenvolvido em Node.js que busca CEP qualquer localidade, o componente exporta uma função que retorna um endereço recebendo um cep como parâmetro.

### Exemplo:

nock('https://viacep.com.br/ws').get('/14405275/json/').reply(200, {
      cep: '14405-275',
      logradouro: 'Rua Padre Conrado',
      bairro: 'Vila Santos Dumont',
      localidade: 'Franca',
      uf: 'SP',
      
### Observações:

1. Precisa gerar o token primeiro, para poder fazer a consulta do cep informado.
2. Apos ter gerado o token informar no Authorize, feito isso acessar a rota GET informar o CEP.

### Requisitos:

1. Use da linguagens: Node.js ou Java.
2. Api com autorização.
3. Boas práticas de design de api.
4. Swagger com a documentação.


