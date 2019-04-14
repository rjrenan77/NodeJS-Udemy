var dbConnection = require ("../../config/dbConnection");

module.exports =(app) => {

    app.get("/noticias", (req,res)=>{
        
        var connection = dbConnection();

        connection.query("select * from noticias", (erro, resultado) => {
            res.render("noticias/noticias", {noticias: resultado});
        });

    
       // res.render("noticias/noticias");
    });
    

}
