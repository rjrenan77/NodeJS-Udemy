
module.exports = (app) =>{
    app.get("/formulario_inclusao_noticia", (req,res) => {
    res.render("admin/form_add_noticia");        
    });

    //chegando dados do formulario
    app.post("/noticias/salvar", (req,res) => {
        var noticias = req.body;

        res.send(noticias);        
    });


}