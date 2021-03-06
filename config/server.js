var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser")
var expressValidator = require("express-validator")
//executa a funcao que o modulo acima retorna
var app = express();
//indica que o EJS será o motor de geração de views
app.set("view engine", "ejs")
//aponta novo caminho de views
app.set("views", "./app/views");

//implementando midleware bodyparser para recuperar informacoes do post
app.use(bodyParser.urlencoded({extended:true}));
//implementando midleware bodyparser para recuperar informacoes do post
app.use(expressValidator());

//inclui diretorio routes no consign e inclui o config para carregar o banco de dados uma unica vez e inclui no servidor(app).
consign()
    .include("app/routes")
    .then("config/dbConnection.js")
    .then("app/models")
    .then("app/controllers")
    .into(app);

module.exports = app;