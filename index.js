var http = require("http");

http.createServer(function (request, reponse){
    reponse.writeHead(200, {'Content-Type': 'text/plain'});
    reponse.end('Hello World\n');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');