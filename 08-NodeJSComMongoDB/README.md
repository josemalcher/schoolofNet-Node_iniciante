# Node.js com MongoDB

Resumo do curso:

---

## <a name="indice">Índice</a>

- [Conhecendo nossa stack](#parte1)
- [Configurando nosso projeto - Express.js/Handlebars](#parte2)  
- [Configurando nosso projeto - MongoDB/Mongoose](#parte3)   
- [Entendendo a template engine Handlebars](#parte4)  
- [Principais funções do Mongoose](#parte5)  
- [Criando nossa primeira aplicação - Estruturando um projeto](#parte6)  
- [ndo nossa primeira aplicação - R Read](#parte7)  
- [Criando nossa primeira aplicação - C/U Create e Update](#parte8)  
- [Criando nossa primeira aplicação - D Delete](#parte9)  
- [Projeto Final - Montando nossos models](#parte10)  
- [Projeto Final - Definindo nossas rotas](#parte11)  
- [Projeto Final - Montando nossas views](#parte12)  
- [Projeto Final - É hora de integrar tudo](#parte13)  
- [Projeto Final - Autenticação via session](#parte14)    



---

## <a name="parte1">Conhecendo nossa stack</a>

http://expressjs.com/pt-br/

http://handlebarsjs.com/

https://www.mongodb.com/

http://mongoosejs.com/


[Voltar ao Índice](#indice)

---

## <a name="parte2">Configurando nosso projeto - Express.js/Handlebars</a>

```
> express library -e --hbs
```

https://github.com/pillarjs/hbs

```
npm start
```

http://localhost:3000/



[Voltar ao Índice](#indice)

---

## <a name="parte3">Configurando nosso projeto - MongoDB/Mongoose</a>

```
$ npm install mongoose
```

### app.js
```javascript
var mongoose = require('mongoose');

//Mongoose
var db = mongoose.connect('mongodb://localhost/library').connection;

db.on('open', function () {
    console.log('Everything is okay, mongoDB is connected');
});

db.on('error', function () {
    console.log('Ops! Something went wrong, mongoDB is broken');
});

var company = mongoose.Schema({
    name: String
});

var Company = mongoose.model('Company', company);

Company.create({
    name: 'Company 1'
}, function (err, company) {
    if(err) {
        console.log('error')
        return
    }

    console.log('Created -> ', company)
});

```

[Voltar ao Índice](#indice)

---

## <a name="parte4">Entendendo a template engine Handlebars</a>

routes/index.js
```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var arr = [];// simulando um BD
  for(var i = 0 ; i < 10 ; i++){
    arr.push({
        id: i,
        name: 'Compania ' + i
    });
  }

  res.render('index', {
    title: 'Express',
    name: 'Jose',
    data: arr
  });
});

module.exports = router;

```
views/index.hbs
```html
<h1>{{title}}</h1>
<p>Welcome to {{title}}</p>
<p>Olá {{name}}</p>

<table>
    <thead>
        <tr>
            <th>id</th>
            <th>index</th>
            <th>nome</th>
        </tr>
    </thead>
    <tbody>
        {{#each data}}
            <tr>
                <td>{{id}}</td>
                <td>{{@index}}</td>
                <td>{{name}}</td>
                <td>{{#date}}{{/date}}</td>
                </tr>
        {{/each}}
    </tbody>
</table>

```
app.js
```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var hbs = require('hbs');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//Helppers HBS

hbs.registerHelper('date', function () {
   return new Date();
});

//Mongoose
var db = mongoose.connect('mongodb://localhost/library').connection;

db.on('open', function () {
    console.log('Everything is okay, mongoDB is connected');
});

db.on('error', function () {
    console.log('Ops! Something went wrong, mongoDB is broken');
});

var company = mongoose.Schema({
    name: String
});

var Company = mongoose.model('Company', company);

Company.create({
    name: 'Company 1'
}, function (err, company) {
    if(err) {
        console.log('error')
        return
    }

    console.log('Created -> ', company)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```

[Voltar ao Índice](#indice)

---

## <a name="parte5">Principais funções do Mongoose</a>

```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var hbs = require('hbs');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//Helppers HBS

hbs.registerHelper('date', function () {
    return new Date();
});


//Mongoose
var db = mongoose.connect('mongodb://localhost/library').connection;

db.on('open', function () {
    console.log('Everything is okay, mongoDB is connected');
});

db.on('error', function () {
    console.log('Ops! Something went wrong, mongoDB is broken');
});

var person = mongoose.Schema({
    name: {
        firstname: String,
        lastname: String
    }
});

person.virtual('name.fullName').get(function () {
    return this.name.firstname.concat(' ').concat(this.name.lastname);
});

var Person = mongoose.model('Person', person);

Person.create({
    name: {
        firstname: 'JOSE',
        lastname: 'Malcher Jr'
    }
}, function (err, person) {
    if (err) {
        console.log('Error -> ' + err)
    }
    console.log('Person Data -> ' + person);
    console.log('Person Fullname -> ' + person.name.fullName);
});

var company = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        name: String,
        number: Number,
        city: String
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

var Company = mongoose.model('Company', company);

Company.create({
    name: 'Company 1',
    address: {
        name: 'Address 1',
        number: 765,
        city: 'São Paulo'
    },
    date: new Date()
}, function (err, company) {
    if(err) {
        console.log('Error -> ', err)
        return
    }

    console.log('Created -> ', company)
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

```

[Voltar ao Índice](#indice)

---

## <a name="parte6">Criando nossa primeira aplicação - Estruturando um projeto</a>

## app.js
```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var hbs = require('hbs');

var connection = require('./models');

var index  = require('./routes/index');
var users  = require('./routes/users');
var person = require('./routes/person');

var app = express();

//Helppers HBS

hbs.registerHelper('date', function () {
    return new Date();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/person', person);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

```
## routes/person.js
```javascript
var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

router.get('/', function (req, res) {
    res.send('OLA - ROTA de PERSON <<---');
});

module.exports = router;
```
## models/index.js
```javascript
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/library').connection;

db.on('open', function () {
    console.log('MogoDB Está CONECTADO!');
});
db.on('error', function () {
    console.log('HOVE UM ERRO!!!.... <<<------------------------');
});

return db;
```
## models/Person.js
```javascript
var mongoose = require('mongoose');

var Person = mongoose.Schema({
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        }
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Person', Person);
```

[Voltar ao Índice](#indice)

---

## <a name="parte7">Criando nossa primeira aplicação - R Read </a>

### routes/person.js
```javascript
var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');


// FINDE ALL
router.get('/', function (req, res) {

    Person.find({}, function (err, people) {
        if(err){
            return;
        }
        res.send(people);
    });
});

//Finde ONE
router.get('/:id', function (req, res) {

    Person.findById(req.params.id, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });

    /*
    Person.findOne({
        _id: req.params.id
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

module.exports = router;
```

[Voltar ao Índice](#indice)

---

## <a name="parte8">Criando nossa primeira aplicação - C/U Create e Update</a>

### routes/person.js

```javascript
var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');


// FINDE ALL
router.get('/', function (req, res) {

    Person.find({}, function (err, people) {
        if (err) {
            return;
        }
        res.send(people);
    });
});

//Finde ONE
router.get('/:id', function (req, res) {

    Person.findById(req.params.id, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });

    /*
    Person.findOne({
        _id: req.params.id
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

router.post('/', function (req, res) {

    //create with insertMany method
    var arr = [
        {
            name: {
                firstname: 'Alvin 1',
                lastname: 'Brand'
            },
            age: 30
        },
        {
            name: {
                firstname: 'Alvin 2',
                lastname: 'Brand'
            },
            age: 27
        },
        {
            name: {
                firstname: 'Alvin 3',
                lastname: 'Brand'
            },
            age: 28
        }
    ];

    Person.insertMany(arr, function (err, person) {
        if (err) {
            return;
        }

        res.send(person);
    });

    /*
    var person = new Person({
        name: {
            firstname: 'Ana CLAUDIA',
            lastname: 'MARIA'
        },
        age: 33
    });
    person.save(person, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */

    /*
    Person.create({
        name: {
            firstname: 'Ana Carolina',
            lastname: 'Castro Malcher'
        },
        age: 33
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

//update
router.put('/:id', function (req, res) {
    /**
     *  findOneAndUpdate
     */
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name: {
            firstname: 'Thed',
            lastname: 'Talks'
        }
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });

    /**
     *  update
     */
    /*
    Person.update({
        _id: req.params.id
    }, {
        name: {
            firstname: 'Bread',
            lastname: 'Paints'
        }
    }, function (err, person) {
        if (err) {
            return;
        }

        res.send(person);
    });
    */
});



module.exports = router;
```

[Voltar ao Índice](#indice)

---

## <a name="parte9">Criando nossa primeira aplicação - D Delete</a>

### routes/person.js

```javascript
var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');


// FINDE ALL
router.get('/', function (req, res) {

    Person.find({}, function (err, people) {
        if (err) {
            return;
        }
        res.send(people);
    });
});

//Finde ONE
router.get('/:id', function (req, res) {

    Person.findById(req.params.id, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });

    /*
    Person.findOne({
        _id: req.params.id
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

router.post('/', function (req, res) {

    //create with insertMany method
    var arr = [
        {
            name: {
                firstname: 'Alvin 1',
                lastname: 'Brand'
            },
            age: 30
        },
        {
            name: {
                firstname: 'Alvin 2',
                lastname: 'Brand'
            },
            age: 27
        },
        {
            name: {
                firstname: 'Alvin 3',
                lastname: 'Brand'
            },
            age: 28
        }
    ];

    Person.insertMany(arr, function (err, person) {
        if (err) {
            return;
        }

        res.send(person);
    });

    /*
    var person = new Person({
        name: {
            firstname: 'Ana CLAUDIA',
            lastname: 'MARIA'
        },
        age: 33
    });
    person.save(person, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */

    /*
    Person.create({
        name: {
            firstname: 'Ana Carolina',
            lastname: 'Castro Malcher'
        },
        age: 33
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

//update
router.put('/:id', function (req, res) {
    /**
     *  findOneAndUpdate
     */
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name: {
            firstname: 'Thed',
            lastname: 'Talks'
        }
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });

    /**
     *  update
     */
    /*
    Person.update({
        _id: req.params.id
    }, {
        name: {
            firstname: 'Bread',
            lastname: 'Paints'
        }
    }, function (err, person) {
        if (err) {
            return;
        }

        res.send(person);
    });
    */
});

router.delete('/:id', function (req, res) {
    /**
     *  findOneAndRemove
     */
    Person.findOneAndRemove({
        _id: req.params.id
    }, function (err) {
        if(err) {
            return;
        }

        res.send(req.params.id);
    });

    /**
     *  remove
     */
    /*
    Person.remove({
        _id: req.params.id
    }, function (err) {
        if(err) {
            return;
        }

        res.send(req.params.id);
    });
    */
});


module.exports = router;
```

[Voltar ao Índice](#indice)

---

## <a name="parte10">Projeto Final - Montando nossos models</a>


[Voltar ao Índice](#indice)

---

## <a name="parte11">Projeto Final - Definindo nossas rotas</a>


[Voltar ao Índice](#indice)

---

## <a name="parte12">Projeto Final - Montando nossas views</a>


[Voltar ao Índice](#indice)

---

## <a name="parte13">Projeto Final - É hora de integrar tudo</a>


[Voltar ao Índice](#indice)

---

## <a name="parte14">Projeto Final - Autenticação via session</a>


[Voltar ao Índice](#indice)

---