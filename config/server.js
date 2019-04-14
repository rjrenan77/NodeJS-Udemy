var express = require("express");
//executa a funcao que o modulo acima retorna
var app = express();

//indica que o EJS será o motor de geração de views
app.set("view engine", "ejs")
//aponta novo caminho de views
app.set("views", "./app/views");


module.exports = app;