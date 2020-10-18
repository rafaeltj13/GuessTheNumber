# Guess The Name! Server

API desenvolvida em Node, sequelize e MySQL.

## Instalação

Para instalar as dependências do projeto, execute:

```bash
npm install
```

Obs.: Como foi utilizado o MySQL, é necessário a criação um banco de dados com o nome guessthenumber na porta 3306. As configurações podem ser alteradas no arquivo:

```bash
./src/config/database.js
```

## Execução

Inicialmente, devemos criar as tabelas no banco de dados criado anteriormente: 

```bash
npm run migrate
```

Logo após, executamos o comando de inicialização do servidor:

```bash
npm start
```

O servidor do Guess The Name! estará disponível na porta 1337.
