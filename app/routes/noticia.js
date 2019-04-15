module.exports =(app) => {

    app.get("/noticia", (req,res)=>{
        
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, (erro, resultado) => {
            res.render("noticias/noticia", {noticia: resultado});
        });
        


    });
    

}
