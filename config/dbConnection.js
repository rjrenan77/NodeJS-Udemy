var mysql = require("mysql");

//variavel criada para nao carregar sempre o banco de dados em todo o auto load
var connMySql = () => {
    console.log("Conexao estabelecida com o banco de dados")
    return mysql.createConnection({
        host: "localhost",
        user: "rootzinho",
        password: "147852369",
        database: "portal_noticias"
    
    });

}

module.exports = () => {
    console.log("módulo de conexao carregado")
    return connMySql;

}

