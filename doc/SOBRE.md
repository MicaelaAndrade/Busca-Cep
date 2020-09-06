[voltar](../README.md)
# Serviço de BUSCA CEP

## Expor um serviço de BUSCA DE CEP.

Serviço de API desenvolvido em Node.js que busca CEP qualquer localidade, o componente exporta uma função que retorna um endereço recebendo um cep como parâmetro.

### Exemplo:

```bash
nock('https://viacep.com.br/ws').get('/14405275/json/').reply(200, {
        cep: '14405-275',
      logradouro: 'Rua Padre Conrado',
      bairro: 'Vila Santos Dumont',
      localidade: 'Franca',
      uf: 'SP',
      }

```
# Sobre a forma que foi realizado o projeto:
1. Foi pedido para substituir um digito da direita para esquerda até endereço seja localizado (foi usado a função recursiva).
2. Usado o express é uma API simples de get que pode ser feita como poucos cliques.
3. Arquitetura utilizado Node-Fetch é uma interface acessa os dados e manipula do pipelen HTTTP.
4. Foi utilizado API Viacep formato JSON.
5. Utilizado Node.js requer / Swagger / Mock, para teste.
6. Foi feito autenticação para API.
7. Estrutura da pasta é em ordenação, para ficar mais visivel e simples.
8. Foi criado Actions dentro do GitHub

      
### Observações:

1. Precisa gerar o token primeiro, para poder fazer a consulta do cep informado.
2. Apos ter gerado o token informar no Authorize(Swagger), feito isso acessar a rota GET informar o CEP.

### Requisitos:

1. Uso da linguagens: Node.js ou Java.( Realizado em Node.js)
2. Api com autorização.
3. Boas práticas de design de api.
4. Swagger com a documentação.


