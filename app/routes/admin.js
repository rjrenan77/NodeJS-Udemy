
module.exports = (app) =>{
    app.get("/formulario_inclusao_noticia", (req,res) => {
         app.app.controllers.admin.formulario_inclusao_noticia(app,req,res);       
    });

    //chegando dados do formulario
    //no post é sempre bom fazer um redirect
    app.post("/noticias/salvar", (req,res) => {
        app.app.controllers.admin.noticias_salvar(app,req,res);       
    });


}