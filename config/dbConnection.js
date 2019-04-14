var mysql = require("mysql");

module.exports = () => {

        return mysql.createConnection({
            host: "localhost",
            user: "rootzinho",
            password: "147852369",
            database: "portal_noticias"

        });


}

