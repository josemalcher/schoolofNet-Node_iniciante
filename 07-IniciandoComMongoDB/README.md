# Iniciando com MongoDB - v2

Resumo do curso:

https://www.schoolofnet.com/curso-iniciando-com-mongodb-rev2/

---

## <a name="indice">Índice</a>

- [Boa vindas](#parte1)
- [NoSQL e o Modelo não relacional](#parte2)  
- [O MongoDB](#parte3)  
- [Iniciando BD e criando conexão no RoboMongo](#parte4)  
- [Criando base de dados e primeira coleção](#parte5)  
- [Inserindo um documento](#parte6)  
- [Buscando documentos](#parte7)  
- [Atualizando documentos](#parte8)  
- [Deletando documentos](#parte9)  
- [Bulk Operations ](#parte10)  
- [Operações com database](#parte11)  
- [Operações com collections](#parte12)  

---

## <a name="parte1">Boa vindas</a>

https://www.mongodb.com/

https://robomongo.org/download



[Voltar ao Índice](#indice)

---
## <a name="parte2">NoSQL e o Modelo não relacional</a>

[Voltar ao Índice](#indice)

---
## <a name="parte3">O MongoDB</a>

http://blog.caelum.com.br/bancos-de-dados-nao-relacionais-e-o-movimento-nosql/

https://sirobotica.wordpress.com/2014/10/23/nosql-o-que-e-vantagens-e-limitacoes/

https://pt.stackoverflow.com/questions/191919/banco-de-dados-n%C3%A3o-relacionais-vs-banco-de-dados-relacionais

[Voltar ao Índice](#indice)

---
## <a name="parte4">Iniciando BD e criando conexão no RoboMongo</a>

Criar pasta /data/bd

```
C:\Program Files\MongoDB\Server\3.6\bin
$ mongod
```




[Voltar ao Índice](#indice)

---
## <a name="parte5">Criando base de dados e primeira coleção</a>

[Voltar ao Índice](#indice)

---
## <a name="parte6">Inserindo um documento </a>

```javascript
db.getCollection('user').insertOne({
    name: 'José Malcher jr.',
    email: 'contato@josemalcher.net',
    idaed: 33,
    tipoBoleano: true,
    endereco: {
        rua: 'Tal tal tal',
        numero: 1220
    },
    tags: [a,b,c,d],
    objetoNulo: null,
    _id: new ObjectId(),
    regex: RegExp(),
})
```

[Voltar ao Índice](#indice)

---
## <a name="parte7">Buscando documentos </a>

```javascript
db.getCollection('user').find({
    _id: ObjectId('5a31b536e18a4e201ec6f87e')
})
```

```javascript
db.getCollection('produtos').insertOne({
    name: 'Item 4',
    qtd: 4,
    dim:{
        altura: 20,
        largura: 20
    }
})
```

```javascript
db.getCollection('produtos').find({
        'dim.altura': 2,
        'dim.largura':2
})
```

Busca em Arrays

```javascript
db.getCollection('produtos').find({
    tag:"TEST"
})
```

[Voltar ao Índice](#indice)

---
## <a name="parte8">Atualizando documentos</a>

```javascript
db.getCollection('user').updateOne({
name:'Maria',age:30},{$set:{age:31}
})
```

```javascript
db.getCollection('produtos').updateOne({
    _id: ObjectId('5a31baede18a4e201ec6f881'),
    'dim.altura':2,
    'dim.largura':2
    },{ $set:{
        'dim.altura':200,
        'dim.largura':200
        }
})
```

```javascript
db.getCollection('produtos').updateOne({
    _id: ObjectId('5a31baede18a4e201ec6f881'),
    'dim.altura':200,
    'dim.largura':200
    },{ $set:{
            tag: ['ela', 'gar', 'modelo']
           }
})
```

```javascript
db.getCollection('produtos').updateOne({
    _id: ObjectId('5a31baede18a4e201ec6f881'),
    'dim.altura':200,
    'dim.largura':200
    },{ $set:{
            tag: ['ela', 'gar', 'modelo']
        }
        
}, {upsert:true}) // <<--- se o doc não existir... será incluso
```

[Voltar ao Índice](#indice)

---
## <a name="parte9">Deletando documentos</a>

```javascript
db.getCollection('user').deleteOne({
    //_id: ObjectId('...')
    email: 'cece@gmail.com'
})
```

[Voltar ao Índice](#indice)

---
## <a name="parte10">Bulk Operations</a>

```javascript
db.getCollection('user').insertMany([{
    name: 'Teste usuário 1',
    email: 'teste1@gmail.com',
    age: 12
    },
    {
    name: 'Teste usuário 2',
    email: 'teste2@gmail.com',
    age: 14
    },
    {
    name: 'Teste usuário 3',
    email: 'teste3@gmail.com',
    age: 15
    }
    ])
```

```javascript
db.getCollection('user').updateMany({
    email: 'teste@gmail.com'
    },{
        $set:{
                email: 'testeemail@gmail.com'
            }
        })
```

```javascript
db.getCollection('user').deleteMany({
    email: 'testeemail@gmail.com'
    })
```



[Voltar ao Índice](#indice)

---
## <a name="parte11">Operações com database</a>

```
> show dbs

MongoSON1  0.000GB
admin      0.000GB
config     0.000GB
local      0.000GB
```

```
> use MongoSON1

switched to db MongoSON1

> db.getCollection('user').find({})
//imprime todos os resultados...
```

```
> use NovoBanco


> db.dropDatabase()

```



[Voltar ao Índice](#indice)

---
## <a name="parte12">Operações com collections</a>

```
> use DbJaCriado

> db.createCollection('teste')

> db.teste.drop()

```

[Voltar ao Índice](#indice)

---

