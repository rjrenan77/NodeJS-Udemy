
module.exports = (app)=> {

    // rotas
    app.get("/", (req,res) => {
        res.render("home/index");
     });


}