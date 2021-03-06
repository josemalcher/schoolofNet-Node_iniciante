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

```
$ express estacionamento -e -hbs

$ npm install

$ npm install mongoose --save

$ npm install bootstrap

$ npm install express-session --save
```

### app.js
```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connection = require('./models');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

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

### models/index.js
```javascript
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/parking').connection;

db.on('open', function () {
    console.log("OK OK OK ---->>>>>>  MongoDB Está Conectado! <<<< -------- OK OK OK");
});

db.on('error', function () {
    console.log("-------- >>>>>  MongoDB error <<<< ------- #*&!@¨#*&@$");
});

return db;
```

### models/cars.js
```javascript
var mongoose = require('mongoose');

var Car = mongoose.Schema({
    driver_name:{
        type: String,
        required: true
    },
    license_plate:{
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ['IN', 'OUT'],
        required: true,
        default: 'IN'
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Car', Car);
```



[Voltar ao Índice](#indice)

---

## <a name="parte11">Projeto Final - Definindo nossas rotas</a>

### app.js
```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connection = require('./models');

var index = require('./routes/index');
var users = require('./routes/users');
var cars = require('./routes/car');

var app = express();

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
app.use('/car', cars);

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

### routers/car.js
```javascript
var express = require('express');
var router = express.Router();
var service = require('../services/cars');

router.get('/', service.find);
router.get('/new', service.new);
router.get('/edit/:id', service.edit);

module.exports = router;
```
### routers/index.js
```javascript
var express = require('express');
var router = express.Router();
var service = require('./../services/index');

/* GET home page. */
router.get('/', service.index);

module.exports = router;

```
### routers/users.js
```javascript
var express = require('express');
var router = express.Router();
var service = require('./../services/users');

/* GET users listing. */
router.get('/login', service.login);
router.get('/register', service.register);

module.exports = router;

```

### services/cars.js
```javascript
exports.find = function (req, res) {
    res.render('car_list');
};

exports.new = function (req, res) {
    res.render('car_new');
};

exports.edit = function (req, res) {
    res.render('car_edit');
};
```
### services/users.js
```javascript
exports.login = function (req, res) {
    res.render('login');
};

exports.register = function (req, res) {
    res.render('register');
};
```
### services/index.js
```javascript
exports.index = function (req, res) {
    res.render('index');
};
```

### Views/*.hbs apenas para testes!!

[Voltar ao Índice](#indice)

---

## <a name="parte12">Projeto Final - Montando nossas views</a>

### Ajuste nos arquivos da views/ *.hbs


[Voltar ao Índice](#indice)

---

## <a name="parte13">Projeto Final - É hora de integrar tudo</a>

```
$ npm install method-override --save

```

### app.js
```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodoverride = require('method-override');
var hbs = require('hbs');
var connection = require('./models');

var index = require('./routes/index');
var users = require('./routes/users');
var cars = require('./routes/car');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Helppers HBS
hbs.registerHelper('equals', function (val1, val2, options) {
    return val1 == val2 ? options.fn(this) : options.inverse(this);
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodoverride(function (req, res, next) { //middleware
    if (req.body && typeof req.body == 'object' && req.body._method){
        var method = req.body._method;

        delete req.body._method;

        return method;
    }
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/car', cars);

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

### routes/car.js
```javascript
var express = require('express');
var router = express.Router();
var service = require('../services/cars');

router.get('/', service.find);
router.post('/', service.create);
router.put('/:id', service.update);
router.delete('/:id', service.remove);

router.get('/new', service.new);
router.get('/edit/:id', service.edit);

module.exports = router;
```

### services/cars.js
```javascript
var Car = require('./../models/car');

exports.find = function (req, res) {
    Car.find({}, function (err, car) {
        if(err) {
            return;
        }

        res.render('car_list', {
            car: car
        });
    });
};

exports.new = function (req, res) {
    res.render('car_new');
};

exports.create = function (req, res) {
    Car.create(req.body, function (err, car) {
        if(err) {
            return;
        }

        res.redirect('car');
    });
};

exports.edit = function (req, res) {
    Car.findById(req.params.id, function (err, car) {
        if(err) {
            return;
        }

        res.render('car_edit', {
            car: car
        });
    });
};

exports.update = function (req, res) {
    Car.update({
        _id: req.params.id
    }, req.body, function (err, car) {
        if(err) {
            return;
        }

        res.redirect('/car');
    });
};

exports.remove = function (req, res) {
    Car.remove({
        _id: req.params.id
    }, function (err) {
        if(err) {
            return;
        }

        res.redirect('/car');
    });
};
```

### + Ajustes nas views/*.hbs


[Voltar ao Índice](#indice)

---

## <a name="parte14">Projeto Final - Autenticação via session</a>

### models user.js
```javascript
var mongoose = require('mongoose');

var User = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);
```

### routes/users.js
```javascript
var express = require('express');
var router = express.Router();
var service = require('./../services/users');

router.get('/login', service.login);
router.get('/register', service.register);
router.post('/signin', service.signin);
router.post('/create', service.create);

module.exports = router;
```

### services/users.js
```javascript
var User = require('./../models/user');

exports.login = function(req, res) {
    res.render('login');
};

exports.signin = function (req, res) {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }, function (err, user) {
        if(err) {
            return;
        }

        req.session.user = {
            username: user.username
        };

        res.redirect('/');
    })
};

exports.register = function(req, res) {
    res.render('register');
};

exports.create = function(req, res) {
    User.create(req.body, function (err, user) {
        if(err) {
            return;
        }

        res.redirect('/users/login');
    })
};
```

### services/index.js
```javascript
exports.index = function (req, res) {
    res.render('index', {
        user: req.session.user
    });
};
```

### app.js
```javascript
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodoverride = require('method-override');
var hbs = require('hbs');
var session = require('express-session');
var connection = require('./models');

var index = require('./routes/index');
var users = require('./routes/users');
var cars = require('./routes/car');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//Helppers HBS
hbs.registerHelper('equals', function (val1, val2, options) {
    return val1 == val2 ? options.fn(this) : options.inverse(this);
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({
    secret: 'estacionamento'
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodoverride(function (req, res, next) { //middleware
    if (req.body && typeof req.body == 'object' && req.body._method){
        var method = req.body._method;

        delete req.body._method;

        return method;
    }
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/car', cars);

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