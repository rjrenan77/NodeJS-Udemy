var app=require("./config/server")

//indicando a rota das paginas e executando a funcao que retorna /** não necessário com o consign rodando */
// var rotaNoticias = require("./app/routes/noticias")(app);
// var rotaHome = require("./app/routes/home")(app);
// var rotaFormularioInclusaoNoticia = require("./app/routes/formulario_inclusao_noticia")(app);


//executando o server retornando uma mensagem
app.listen(3000, () => console.log("servidor iniciado"))

