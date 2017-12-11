# Node com Express.js

Resumo do curso:

https://www.schoolofnet.com/curso-node-com-expressjs/

---

## <a name="indice">Índice</a>

- [Introdução](#parte1)
- [Nosso ambiente](#parte2)
- [Entendendo expressjs](#parte3)
- [Criando nosso projeto](#parte4)
- [Rotas](#parte5)
- [Request](#parte6)
- [Tipo de respostas](#parte7)
- [Servindo arquivos estáticos ](#parte8)
- [Middlewares](#parte9)
- [Escrevendo middlewares ](#parte10)
- [Capturar erros](#parte11)
- [Trabalhando com template engine](#parte12)
- [Finalizando](#parte13)

  

---

## <a name="parte1">Introdução</a>

http://expressjs.com/pt-br/

[Voltar ao Índice](#indice)

---

## <a name="parte2">Nosso ambiente</a>

[Voltar ao Índice](#indice)

---


## <a name="parte3">Entendendo expressjs</a>

https://nodejs.org/en/

http://expressjs.com/pt-br/



[Voltar ao Índice](#indice)

---


## <a name="parte4">Criando nosso projeto</a>

### Gerador de aplicativos do Express

https://stackoverflow.com/questions/27344045/installing-node-js-and-npm-on-windows-10

http://expressjs.com/pt-br/starter/generator.html

### manual

cd my_express

```
npm init
```

```
npm install express --save
```

```javascript
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

```

```
node app.js
```




[Voltar ao Índice](#indice)

---


## <a name="parte5">Rotas</a>


```javascript
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        message: 'Olá Mundo!! ;-)'
    })
});

router.get('/a?r', function (req, res) {
    res.send('router a?r'); // a é opcional || expressão regular 'a+r' ou 'a*r'
});

module.exports = router;
```

```javascript
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte6">Request</a>

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    //console.log(req);
    res.json({
        message: 'Olá Mundo!! ;-)'
    })
});

router.get('/a*r', function (req, res) {
    res.send('router a?r'); // a é opcional || expressão regular 'a+r' ou 'a*r'
});

router.get('/params/:name', function (req, res) {
    res.json({
        params: req.params,
        host: req.host,
        headers: req.header,
        port : req.port
    })
});

router.post('/body',function (req, res) {
    res.json(req.body)
})

module.exports = router;
```

```javascript
var express = require('express');
var path = require('path');
var app = express();
//var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');


app.get('/', function (req, res) {
    res.send('Olá mundo!!! Com express!');
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

app.listen(3000, function () {
    console.log('Express Startado!!!');

});

```

[Voltar ao Índice](#indice)

---

## <a name="parte7">Tipo de respostas</a>

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    //console.log(req);
    res.json({
        message: 'Olá Mundo!! ;-)'
    })
});

router.get('/a*r', function (req, res) {
    res.send('router a?r'); // a é opcional || expressão regular 'a+r' ou 'a*r'
});

router.get('/params/:name', function (req, res) {
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.header,
        port : req.port
    })
});

router.post('/body',function (req, res) {
    res.json(req.body)
});

/*router.get('/res', function (req, res) {
    res.status(201).send('test');
});*/
router.get('/res', function (req, res) {
    res.status(201).json({
        name: 'Jose ',
        lastname: 'Malcher'
    });
});
router.get('/res', function (req, res) { // template engine
    res.render('index',{
        // js
    })
});

module.exports = router;
```


[Voltar ao Índice](#indice)

---


## <a name="parte8">Servindo arquivos estáticos</a>

```javascript
var express = require('express');
var path = require('path');
var app = express();
//var http = require('http');
var routes = require('./routes');
var bodyParser = require('body-parser');


app.get('/', function (req, res) {
    res.send('Olá mundo!!! Com express!');
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

```

[Voltar ao Índice](#indice)

---


## <a name="parte9">Middlewares</a>



[Voltar ao Índice](#indice)

---


## <a name="parte10">Escrevendo middlewares</a>

```javascript
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

```

```javascript
var express = require('express');
var router = express.Router();

//Escrevendo middlewares // primeiro
router.use(function (req, res, next) {
    console.log('UM MIDDLEWARE CUstomizado dentro de ROUTER!!')
    next();
});

router.get('/', function (req, res) {
    //console.log(req);
    res.json({
        message: 'Olá Mundo!! ;-)'
    })
});

router.get('/a*r', function (req, res) {
    res.send('router a?r'); // a é opcional || expressão regular 'a+r' ou 'a*r'
});

router.get('/params/:name', function (req, res) {
    res.json({
        params: req.params,
        host: req.hostname,
        headers: req.header,
        port : req.port
    })
});

router.post('/body',function (req, res) {
    res.json(req.body)
});

/*router.get('/res', function (req, res) {
    res.status(201).send('test');
});*/
router.get('/res', function (req, res) {
    res.status(201).json({
        name: 'Jose ',
        lastname: 'Malcher'
    });
});
router.get('/res', function (req, res) { // template engine
    res.render('index',{
        // js
    })
});

module.exports = router;
```


[Voltar ao Índice](#indice)

---


## <a name="parte11">Capturar erros </a>

```javascript
//Capturando erros - sempre no final

app.use(function(err, req, res,next){
    res.status(500)
        .json({
            message: 'Alguma coisa Errada Aconteceu!!'
        });
});

```

```javascript

router.get('/', function (req, res,next) {
    //console.log(req);
    /*res.json({
        message: 'Olá Mundo!! ;-)'
    })*/
    next(new Error('Erro Customizado!!'))
});
```

[Voltar ao Índice](#indice)

---


## <a name="parte12">Trabalhando com template engine</a>

[Voltar ao Índice](#indice)

---


## <a name="parte13">Finalizando</a>

[Voltar ao Índice](#indice)

---