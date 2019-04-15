module.exports =(app) => {

    app.get("/noticia", (req,res)=>{
        
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        
        noticiasModel.getNoticias((erro, resultado) => {
            res.render("noticias/noticia", {noticia: resultado});
        });
        


    });
    

}
