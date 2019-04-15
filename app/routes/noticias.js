module.exports =(app) => {

    app.get("/noticias", (req,res)=>{
        
        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(erro, resultado) {
            res.render("noticias/noticias", {noticias: resultado});
        });
        
        


    });
    

};
