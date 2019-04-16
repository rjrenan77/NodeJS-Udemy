
module.exports = (app)=> {

    // rotas
    app.get("/", (req,res) => {
       app.app.controllers.home.index(app,req,res);
     });


}