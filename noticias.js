//importando lib http
var http = require("http");

var server = http.createServer((req, res) => {
    //recupera url da requisicao
    var categoria = req.url;
    if(categoria == "/tecnologia")
        res.end("<html><body> Portal de Tecnologia</body></html>")
    else if(categoria == "/moda")
        res.end("<html><body> Portal de Moda</body></html>")
    else if(categoria == "/esporte")
        res.end("<html><body> Portal de Esporte</body></html>")        
    else
        res.end("<html><body> Portal de Noticias</body></html>")

})
server.listen(3000);