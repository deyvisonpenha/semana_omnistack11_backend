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
$ yarn install
```
Agora podemos rodar o app de 2 formas, se estiver usando o VS Code no seu computador (forma local)
``` bash
$ expo start
```
Se estiver usando o GitPod ou alguma recurso in cloud, precisamos rodar o expo em modo "tunnel". Isso permitirá ler o QR code 
e abrir seu aplicativo no expo sem estar na mesma rede do servidor.
``` bash
$ expo start --tunnel
```

## Dependencias e Recursos Utilizados
### Backend
- Express
- Nodemon
- Knex
- Sqlite
- Cors
### Frontend
- React Router Dom
- Axios
- Use State
- Use History

axios client http vai fazer a conexão com o BD

## Tips
Deploy para heroku: Adicionei o arquivo Procfile (na raiz do projeto) e dentro dele `web: cd backend && yarn start` que direciona para a pasta backend. 
Após isso crie tambem o arquivo `.buildpacks` com o seguinte script `backend=https://github.com/heroku/heroku-buildpack-nodejs.git` , dá um `cd backend` e utliza o buildpack do NodeJs. 
