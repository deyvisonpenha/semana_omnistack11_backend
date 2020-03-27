# Semana Omnistack11 Rocketseat - Be The Hero
Semana Omnistack 11 da Rocketseat, no qual será desenvolvido uma aplicação utilizando NodeJs, React e React Native

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
`$ cd backend`

Após isso digite o comando `yarn install` para instalar todas as dependencias que estão no package.json , em seguida
o comando `npx knex migrate:latest` para criar as tabelas do banco de dados. 
Pronto agora é só digitar `yarn dev` que seu backend já está configurado e rodando.
#### Exemplo frontend

`$ cd frontend`

## Dependencias
### Backend
- Express
- Nodemon
- Knex
- Sqlite
- Cors
### Frontend

## Tips
Deploy para heroku: Adicionei o arquivo Procfile e dentro dele `web: cd backend && yarn start` que direciona para a pasta backend
