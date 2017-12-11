var express = require('express');
var path = require('path');
var app = express();
//var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');

//template
app.set('view engine', 'pug');
//ou
app.set('view', './views_dir');

//Escrevendo middlewares // primeiro
app.use(function (req, res, next) {
    req.name = 'Passando por request';
    console.log('UM MIDDLEWARE CUstomizado!!');
    next();
});


app.get('/', function (req, res) {
    res.render('index',{
        message:'Olá... usando template engine!!'
    });
    //res.send('Olá mundo!!! Com express!' + req.name);
});

app.get('/word', function (req, res) {
    res.send('Olá Mundo - Por app GET /word')
} );
app.use('/hello', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));



/*
http.createServer(app).listen(3000, function () {
    console.log('Express Startado!!!');
});
*/

app.use('/public',express.static(path.join(__dirname, 'public')));

//Capturando erros - sempre no final

app.use(function(err, req, res,next){
    res.status(500)
        .json({
            message: 'Alguma coisa Errada Aconteceu!!'
        });
});



app.listen(3000, function () {
    console.log('Express Startado!!!');

});

