var http = require('http');
var handle = require('./handle');
//var handle = require('./name');

var events = require('events');
var emiter = new events.EventEmitter();

require('console-log-hello-world')

/*
emiter.on('say',say)
function say() {
    console.log('Im Saying....')
}
emiter.emit('say');
*/


/*function handle(request, response) {
     response.writeHead(200, {
         'Content-Type': 'text/html'
     });

     response.write('<!DOCTYPE "html">');
     response.write('<html>');
     response.write('<head><title>Http Module</title></head>');
     response.write('<body>');
     response.write('<h1>Hello from http module SON</h1>')
     response.write('</body>');
     response.write('</html>');

     response.end();
 }*/

//console.log(handle);
//console.log(s.name());

var server = http.createServer(handle.fn);

server.listen(3000, function () {
    console.log('Servidor criado com sucesso... na 3000');
});