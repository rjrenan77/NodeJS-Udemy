module.exports.formulario_inclusao_noticia = function(app,req,res){
    res.render("admin/form_add_noticia",{validacao: {}, noticiac: {}}); 

    
}

module.exports.noticias_salvar = function(app,req,res){
    var noticia = req.body;


        console.log(noticia)
        //expressvalidator
        req.assert("titulo","Titulo é obrigatorio").notEmpty();
        req.assert("resumo","Resumo é obrigatorio").notEmpty();
        req.assert("resumo","Resumo deve ter entre 10 e 100 caracteres").len(3,100);
        req.assert("autor","Autor é obrigatorio").notEmpty();
        req.assert("data_noticia","Data é obrigatorio").notEmpty();
        req.assert("noticia","Noticia é obrigatorio").notEmpty();

        var erros = req.validationErrors();

        console.log(erros);

        if(erros){
            //console.log("eriiii")
            res.render("admin/form_add_noticia", {validacao: erros, noticiac: noticia}); 
            //console.log(validacao)
            return;
        }


        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(erro, resultado) {
            res.redirect("/noticias");
        });
}