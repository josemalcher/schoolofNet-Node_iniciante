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


[Voltar ao Índice](#indice)

---

## <a name="parte5">Principais funções do Mongoose</a>


[Voltar ao Índice](#indice)

---

## <a name="parte6">Criando nossa primeira aplicação - Estruturando um projeto</a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">Criando nossa primeira aplicação - R Read </a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">Criando nossa primeira aplicação - C/U Create e Update</a>


[Voltar ao Índice](#indice)

---

## <a name="parte9">Criando nossa primeira aplicação - D Delete</a>


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