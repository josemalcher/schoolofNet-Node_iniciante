var express = require('express');
var path = require('path');
var app = express();
//var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');

//Escrevendo middlewares // primeiro
app.use(function (req, res, next) {
    req.name = 'Passando por request';
    console.log('UM MIDDLEWARE CUstomizado!!');
    next();
});


app.get('/', function (req, res) {
    res.send('Olá mundo!!! Com express!' + req.name);
});

app.get('/word', function (req, res) {
    res.send('Olá Mundo - Por app GET /word')
} );
app.use('/hello', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}))

/*
http.createServer(app).listen(3000, function () {
    console.log('Express Startado!!!');
});
*/

app.use('/public',express.static(path.join(__dirname, 'public')));


app.listen(3000, function () {
    console.log('Express Startado!!!');

});
