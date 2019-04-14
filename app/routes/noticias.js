
module.exports =(app) => {

    app.get("/noticias", (req,res)=>{
        var mysql = require("mysql");

        var connection = mysql.createConnection({
            host: "localhost",
            user: "rootzinho",
            password: "147852369",
            database: "portal_noticias"

        });

        connection.query("select * from noticias", (erro, resultado) => {
            res.render("noticias/noticias", {noticio: resultado});
        });

    
       // res.render("noticias/noticias");
    });
    

}
