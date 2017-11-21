# ES6

Aprenda os novos conceitos que o ES6 trouxe para o Javascript.

Resumo do curso:

https://www.schoolofnet.com/curso-es6/

---

## <a name="indice">Índice</a>

- [Falando sobre o ES6](#parte1)
- [Instalando e configurando o Babel Js](#parte2)
- [Arrow functions](#parte3)
- [Definindo Class](#parte4)
- [String template](#parte5)
- [Valores default](#parte6)
- [Listar registros com For OF](#parte7)
- [Trabalhando com Herança](#parte8)
- [Set date struture](#parte9)
- [Formatação de números](#parte10)
- [Formatando moeda](#parte11)
- [Formatação de datas](#parte12)
- [Busca em strings](#parte13)
- [Finalizando](#parte14)
  

---

## <a name="parte1">Falando sobre o ES6 </a>

https://babeljs.io/


[Voltar ao Índice](#indice)

---

## <a name="parte2">Instalando e configurando o Babel Js</a>

terminal:
```
npm init
npm install babel-cli babel-preset-es2015 --save-dev
```

```
{
  "name": "comecando_com_es6",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1", // virgula...
    "babel": "babel src --out-file js/main.js -w" // <<<<<<-------- Adição
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1"
  }
}

```
Criar pasta src e js.

Criar o arquivo .babelrc :
```
{
  "presets": [  "es2015" ]
}

```

Teste src/app.js
```javascript
class Cliente{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}
```

Rodar o babel, terminal:
```
npm run babel

```


[Voltar ao Índice](#indice)

---

## <a name="parte3">Arrow functions</a>

```javascript
/*

var bob = {
    _name:"Bob",
    _friends: ["Guilherme","Camila","Murilo"],
    printFriends: function printFriends(){
        var self = this;
        this._friends.forEach(function(f){
            return console.log(self._name + " knows " + f);
        });
    }
};
bob.printFriends();
*/



// Novo método
var color = () => console.log("red");
color();

var bob = {
    _name:"Bob",
    _friends: ["Guilherme","Camila","Murilo"],
    printFriends: function printFriends(){
        this._friends.forEach(f =>
            console.log(this._name + " knows "+ f));
    }
};

bob.printFriends();
```


[Voltar ao Índice](#indice)

---

## <a name="parte4">Definindo Class</a>

```javascript
class Color{
    constructor (codeColor , nameColor){
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    };

    getColor(){
        return {
            codeColor:this.codeColor,
            nameColor:this.nameColor
        };
    };
}

let red = new Color("red", "RED(vermelho)");
console.log(red.getColor());
```

[Voltar ao Índice](#indice)

---

## <a name="parte5">String template</a>

```javascript
let name = "José Malcher Jr.";
let age =  33;

let text = "Nome: " + name + " Idade: "+ age;

let text2 = ` 
        name: ${ name }
        age: ${age }`;

console.log(text)
console.log(text2)
```

[Voltar ao Índice](#indice)

---

## <a name="parte6">Valores default</a>



[Voltar ao Índice](#indice)

---

## <a name="parte7">Listar registros com For OF</a>



[Voltar ao Índice](#indice)

---

## <a name="parte8">Trabalhando com Herança</a>



[Voltar ao Índice](#indice)

---

## <a name="parte9">Set date struture </a>



[Voltar ao Índice](#indice)

---

## <a name="parte10">Formatação de números</a>



[Voltar ao Índice](#indice)

---

## <a name="parte11">Formatando moeda </a>



[Voltar ao Índice](#indice)

---

## <a name="parte12">Formatação de datas</a>



[Voltar ao Índice](#indice)

---

## <a name="parte13">Busca em strings</a>



[Voltar ao Índice](#indice)

---

## <a name="parte14">Finalizando</a>



[Voltar ao Índice](#indice)

---