module.exports.noticias = function(app,req,res) {
    var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(erro, resultado) {
            res.render("noticias/noticias", {noticias: resultado});
        });
        
}

module.exports.noticia = function(app,req,res) {
    
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);
    
    noticiasModel.getNoticias((erro, resultado) => {
        res.render("noticias/noticia", {noticia: resultado});
    });
    
}