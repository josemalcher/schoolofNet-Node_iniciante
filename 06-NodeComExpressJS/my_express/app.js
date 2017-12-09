var express = require('express');
var app = express();
var http = require('http');

app.get('/', function (req, res) {
    res.send('Olá mundo!!! Com express!');
});

http.createServer(app).listen(3000, function () {
    console.log('Express Startado!!!');
});

/*
app.listen(3000, function () {
    console.log('Express Startado!!!');

});*/
