var express = require("express");
var consign = require("consign");
//executa a funcao que o modulo acima retorna
var app = express();
//indica que o EJS será o motor de geração de views
app.set("view engine", "ejs")
//aponta novo caminho de views
app.set("views", "./app/views");

//inclui diretorio routes no consign e inclui no servidor(app).
consign().include("app/routes").into(app);

module.exports = app;