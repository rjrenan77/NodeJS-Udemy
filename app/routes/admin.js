
module.exports = (app) =>{
    app.get("/formulario_inclusao_noticia", (req,res) => {
    res.render("admin/form_add_noticia");        
    });

    //chegando dados do formulario
    //no post é sempre bom fazer um redirect
    app.post("/noticias/salvar", (req,res) => {
        var noticia = req.body;
        
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro, resultado) {
            res.redirect("/noticias");
        });
    });


}