const { response } = require("express");
const { ReadStream } = require("fs");
var http = require("http");

fs = require('fs');

const PORT = process.env.PORT || 3000;
//app.listen(PORT, () => {
//    console.log('Our app is running on port ${ PORT }');
//});

http.createServer(function (request, reponse){
    reponse.writeHead(200, {'Content-Type': 'text/html', 'Access-Control-Allow-Origin' : '*'});
    var readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(response);
    //reponse.end('Hello World\n');
}).listen(PORT);

console.log('Server running at http://127.0.0.1:'+PORT+'/');