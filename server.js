//Importar a biblioteca json-server
const jsonServer = require('json-server');

// Criar um instancia do servidor JsonServer 
//Essa instancia é usada para criar e configurar o servidor
const server = jsonServer.create();

//Criar um roteador com o arquivo db.json 
//O roteador define as rotas do servidor. Ele utiliza um arquivo JSON para gerar a rota.
const router = jsonServer.router('db.json');

//Funções que são executadas em cada requisição feita com o servidor
//Importa os padrões JsonServer
const middlewares = jsonServer.defaults();

//Funções que são executadas em cada requisição feita com o servidor
server.use(middlewares);

//Define a porta em que o servidor irá rodar
const porta = 3000;

//Usa o roteador criado
server.use(router);

//Importa o módulo express
const express = require('express');

//Criando variavel instancia do express
const app = express();

//Configura o servidor para usar
app.use(express.static('public'));

//Defini a rota principal
//Enviando o arquivo index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

//Inicia o servidor na porta definida e exibe uma mensagem no console
server.listen(porta, () => {
    console.log(`O servidor está rodando em http://localhost:${porta}`);
})

