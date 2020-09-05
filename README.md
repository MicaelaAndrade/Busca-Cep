<h1 align="center">Serviço busca de cep em Node.js</h1>

## 👩🏻‍🎤  Sobre o Desafio
[Aqui](DOC/SOBRE.md)

## 💻 O projeto
<p align="center">Serviço de API desenvolvido em Node.js que busca CEP qualquer localidade,
        o componente exporta uma função que retorna um endereço recebendo um cep como parâmetro.</p>

<h1 align="center">
    <a href="https://nodejs.org/en/">🔗 Node.Js</a>
</h1>
<p align="center">🚀 Serviço busca de cep</p>


### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando Rotas


| TYPE | PATH | ARGS | QUERY | PARAMS | DESCRIÇÃO |
|------|------|------|-------|--------|-----------|
|GET| / | - | - | - | status do servidor |
|GET| /auth/token | - | - | - | retorna token da aplicação |
|GET| /customer-ceṕ/14405275 | - | - | - | retorna os dados informado pelo cep |
| - | /doc | - | - | - | Aplicação do swagger |


### 👩🏻‍🔧 Realizando teste com swagger

```bash
# Acessando a rota
$  http://localhost:3000/doc
$  Precisa gerar o token primeiro, para poder fazer a consulta do cep informado.
$  Apos ter gerado o token informar no Authorize, feito isso acessar a rota GET informar o CEP.

# Estrutura do projeto
$  Foi pensado para facilitar maneira de consultar CEP de qualquer localidade, junto com API ViaCep.
$  Com o retorno dos  dados principais da aplicação .

Todo módulo do projeto tem sua responsabilidade, os arquivos estão configuração e padronizados no projeto.

API_NODE/
├── api/
│   ├── middlewares/
│   │   │── modules/
│   │   │   │── Auth/
│   │   │   │   │── __controllers__/
│   │   │   │   │     └── AuthController.js
│   │   │   │   │── __routes__/
│   │   │   │   │     └── AuthRoutes.js
│   │   │   │   │── __services__/
│   │   │   │   │──   └── tests__/
│   │   │   │   │        └──AuthService.test.js
│   │   │   │   │           └── AuthService.js
│   │   │   │   │── __tests__/
│   │   │   │   │     └── Auth.test.js
│   │   │── CustomerCep/
│   │   │   │   │── __controllers__/
│   │   │   │   │     └── CustomerCepController.js
│   │   │   │   │── __routes__/
│   │   │   │   │     └── CustomerCepRouter.js
│   │   │   │   │── __services__/
│   │   │   │   │──   └── tests__/
│   │   │   │   │         └── CustomerCepService.test.js
│   │   │   │   │── CustomerCepService.js
│   │   │   │   │──   └── tests__/
│   │   │   │   │         └── CustomerCep.test.js
│   │   │   │── CustomerCepService.js
│   │── Server.js
│   │── config/
│   │   │── auth.js
│   │   │── default.json
│   │   │── express.js
│   │   │── test.json
├── DOC/
│   └── SOBRE.md
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── index.js
├── jest.config.js
├── package.json
├── README.md
└── swagger.js
└── swagger_output.json

```

### Autor

 <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/53954022/92161695-549d5400-ee07-11ea-9373-cc42e7ee53a5.png" width="100px;" alt=""/>
 <sub><b>Micaela Andrade</b></sub>

 👋🏽 Entre em contato!

[![Twitter Badge](https://img.shields.io/badge/-@micaelaandrade_-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/micaelaandrade_)](https://twitter.com/micaelaandrade_) [![Linkedin Badge](https://img.shields.io/badge/-Micaela-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/micaela-andrade/)](https://www.linkedin.com/in/micaela-andrade/)
[![Gmail Badge](https://img.shields.io/badge/-micaela17andrade@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:micaela17andrade@gmail.com)](mailto:micaela17andrade@gmail.com)

