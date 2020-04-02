# Semana Omnistack11 Rocketseat - Be The Hero
Semana Omnistack 11 da [Rocketseat](https://rocketseat.com.br/), no qual será desenvolvido uma aplicação utilizando NodeJs, React e React Native

Neste projeto foi desenvolvido uma aplicação para ONGs de animais, onde será possivel cadastrar animais feridos que necessitam de tratamento, 
alem dos contatos pelo whatsapp e email (para pagar pelo tratamento do animal).

## Aprendizado

#### Backend
- Neste projeto foi utilizado o knex para configuração do nosso banco de dados, sendo usado o sqlite para development e 
postgresql para o production.
- Insomnia para testar nossas rotas
## Instruções para rodar
Após clonar o projeto, no diretório do projeto abra o terminal e direcione para a uma das pastas (backend ou frontend), 
#### Exemplo Backend:
``` bash
$ cd backend
```
Após isso digite o comando `yarn install` para instalar todas as dependencias que estão no package.json , em seguida
o comando `npx knex migrate:latest` para criar as tabelas do banco de dados. 
Pronto agora é só digitar `yarn dev` que seu backend já está configurado e rodando.
``` bash
$ yarn install
$ npx knex migrate:latest
$ yarn dev
```

#### Exemplo frontend

``` bash
$ cd frontend
$ yarn install
```
OBS: é importante configurar corretamente a url do seu backend. Se estiver rodando localmente use:
```javascript
\\ frontend/src/services/api.js
const api = axios.create({
    baseURL: 'http://localhost:3333/'
});
```
#### Exemplo Mobile
``` bash
$ npm install -g expo-cli
$ cd mobile
$ 
```
Agora podemos rodar o app de 2 formas, se você estiver usando o VS Code no seu computador (forma local)
``` bashe

## Dependencias
### Backend
- Express
- Nodemon
- Knex
- Sqlite
- Cors
### Frontend

axios client http vai fazer a conexão com o BD

## Tips
Deploy para heroku: Adicionei o arquivo Procfile (na raiz do projeto) e dentro dele `web: cd backend && yarn start` que direciona para a pasta backend. 
Após isso crie tambem o arquivo `.buildpacks` com o seguinte script `backend=https://github.com/heroku/heroku-buildpack-nodejs.git` , dá um `cd backend` e utliza o buildpack do NodeJs. 
