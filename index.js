var http = require("http");

const $PORT;

http.createServer(function (request, reponse){
    reponse.writeHead(200, {'Content-Type': 'text/plain'});
    reponse.end('Hello World\n');
}).listen($PORT);

console.log('Server running at http://127.0.0.1:$PORT/');