var express = require('express');
var app = express();
//var http = require('http');

var routes = require('./routes');

app.get('/', function (req, res) {
    res.send('Olá mundo!!! Com express!');
});

app.get('/word', function (req, res) {
    res.send('Olá Mundo - Por app GET /word')
} );
app.use('/hello', routes);

/*
http.createServer(app).listen(3000, function () {
    console.log('Express Startado!!!');
});
*/

app.listen(3000, function () {
    console.log('Express Startado!!!');

});
