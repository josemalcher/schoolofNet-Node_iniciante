# Orientação a Objetos com Javascript - ES5 - V2

Resumo do curso:

https://www.schoolofnet.com/curso-orientacao-objetos-com-javascript-es5/

---

## Índice

- [Introdução](#parte1)
- [Review sobre ambiente](#parte2)
- [Introdução sobre orientação a objetos](#parte3)
- [Iniciando com classes](#parte4)    
- [Metodos e atributos](#parte5)    
- [Encapsulamentos](#parte6)    
- [Métodos estáticos](#parte7)
- [Construtor](#parte8)    
- [Modificadores de acesso](#parte9)    
- [Prototype object](#parte10)    
- [Herança via prototype](#parte11)    
- [Polimorfismo](#parte12)    
- [Finalizando](#parte13)    
   

---

## <a name="parte1">Introdução</a>

Queremos apresentar o novo paradigma do JavaScript, a Orientação a objetos.

Ao acompanhar este conteúdo, você aprenderá os principais pilares que esse paradigma nos traz e como podemos aplicá-lo, na prática, no Javascript.

Mostraremos as principais diferenças em relação as outras linguagens que possuem o suporte a orientação a objetos e a importância de se programar utilizando esta estrutura.

Você entenderá como funciona uma classe e como ela é constituída com seus métodos e atributos.

Falaremos sobre:

1 - Encapsulamento  
2 - Construtores  
3 - Modificadores de acesso  
4 - Herança  
5 - Polimorfismo.  

Além de todos estes tópicos, focaremos bastante no processo de criação com prototype.

Seja bem-vindo a mais um conteúdo da School Of Net.

[Voltar ao Índice](#indice)

---

## <a name="parte2">Review sobre ambiente</a>

Neste módulo falaremos sobre o ambiente que teremos para desenvolver o tema proposto.

O ambiente será o mais simples possível, não existindo nenhuma dificuldade em ser criado.

Utilizaremos o http-server como servidor web, que é um pacote disponível no npm. Com este pacote conseguimos criar um servidor web em qualquer local, dentro de uma porta específica, para que possamos rodar aplicações.

Caso prefira utilizar outro servidor web, fique a vontade. Você pode utilizar os seguintes servidores:

1- Servidor embutido do Python  
2- Servidor embutido do PHP  
3- Apache ou Nginx  

Para utilizar o http-server será necessário a instalação do Node.js que já vem com o npm como dependência, em sua instalação. Para instalar o Node.js acesse o link abaixo que você encontrará o download para todas as plataformas.

https://nodejs.org/en/download/

Caso você decida utilizar o http-server, após a instalação do npm, abra o terminal e rode o comando abaixo:

```
npm install http-server -g
```

Além do servidor web, necessitaremos de um browser. Você pode utilizar qualquer browser que possua suporte ao JavaScript.

Para desenvolver o código, utilizaremos o editor Visual Studio Code, que está disponível no link abaixo, para todas as plataformas:

https://code.visualstudio.com/

Sempre aconselhamos o download da versão LTS(Long-term support), para evitar problemas de compatibilidade com algumas bibliotecas. Você poderá instalar a versão current, caso queira.


[Voltar ao Índice](#indice)

---

## <a name="parte3">Introdução sobre orientação a objetos</a>


Após ter configurado o ambiente, começaremos a desenvolver na prática.

Apresentaremos alguns conceitos iniciais sobre o que é orientação a objeto e como podemos aplicá-la dentro do JavaScript.

Programação orientada a objeto é um dos paradigmas mais utilizados, atualmente, em programação independente da linguagem utilizada. Isso porque, a maioria das linguagens já fornece suporte a este padrão.

Todo desenvolvedor deve conhecer estes conceitos e mostraremos como aplicá-lo no JavaScript.

O JavaScript também é orientado a eventos. Você vê, constantemente, em aplicações que utilizam o JQuery, por exemplo. Alguns frameworks conhecidos também encapsulam parte da orientação a ojeto de maneira abstraída, mas também focam na orientação a eventos.

O nosso foco neste curso é falar sobre a orientação a objetos, deixaremos os eventos um pouco de lado.

Desenvolver projetos através de classes e atributos, transpondo toda estrutura real em um objeto, é uma definição mais simples para falarmos de orientação a objetos. Podemos criar diversos objetos para que eles trabalhem individualmente ou em conjunto. Tudo dependerá da lógica envolvida no projeto a ser desenvolvido.

Muitas linguagens, fortemente conhecidas, utilizam a estrutura orientada a objetos e utilizará por muitos anos ainda. Alguns exemplos de linguagens que utilizam:

- CSharp (C#)  
- Java  
- Ruby  

O JavaScript também utiliza, mas de forma diferente das demais. Em módulos futuros, mostraremos as diferenças e como lidar com elas.

Quando estamos programando orientado a objeto, é necessário que tenhamos um pensamento um pouco distinto da forma estruturada de pensar. Apesar de termos um problema real a ser resolvido, temos que pensar de maneira diferente por estarmos trabalhando com objetos da programação. Precisamos pensar na maneira que a máquina pensaria e por isso aprendemos desenvolver algorítmos.

Primeiro, temos que capturar todos os pontos lógicos a serem resolvidos, depois transformamos todos estes pontos em classes. Estas classes terão características e ações que formarão um objeto a ser utilizado para solucionar o problema em questão.

Um exemplo muito utilizado para explicar uma abstração e um código orientado a objeto, é uma classe que cria pessoas. Pessoas possuem características e ações como abaixo:

Características:  
- Idade  
- Sexo  
- Peso  

Ações:  
- Andar  
- Falar  
- Correr  

Por mais simples que seja o exemplo, não deixa de ser um exemplo de abstração de um mundo real para o mundo computacional.

Esta ação de abstração pode ser feita, inconsciente ou conscientemente, para modelar os dados de forma orientada a objetos.

Quando utilizamos este paradigma, ele traz consigo a facilidade da reutilização do código em algum momento, ou seja, existem classes genéricas que podem ser utilizadas para mais de uma finalidade.

Dessa forma que são criadas bibliotecas e alguns frameworks disponibilizam classes prontas, para que possamos utilizar quando for necessário e quantas vezes forem necessárias.

Todos estes conceitos, quando aplicados corretamente, nos proporcionam trabalhar de forma mais organizada, deixando nosso código mais limpo e consequentemente uma melhor manutenção dos projetos.

A partir de agora comentaremos os principais conceitos e, dentro de exemplos práticos, mostraremos como são utilizados e aplicados dentro da linguagem JavaScript.

[Voltar ao Índice](#indice)

---

## <a name="parte4">Iniciando com classes</a>

Para começar a praticar, crie uma pasta em sua máquina. O nome que escolhemos para a pasta foi oop_js_es5.

Abra esta pasta dentro do seu editor de texto, estamos trabalahndo com Visual Studio Code. Crie um arquivo chamado index.html, com o código abaixo:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <p>OOP Javascript</p>
    <script>

    </script>
</body>
</html>

```

Depois, abra o terminal e acesse a pasta do projeto.

Dentro da pasta rode o comando abaixo para subir o servidor:

###http-server

Você deverá obter o seguinte resultado:

```
valls@mac-3 oop_js_es5 $ http-server
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.0.2:8080
  http://192.168.0.9:8080
  
```

Em seguida, basta acessar o endereço http://localhost:8080/ em seu navegador e conferir a página sendo renderizada, corretamente. Caso tenha o texto OPP Javascript sendo renderizado no navegador, significa que o ambiente está configurado e pronto para iniciar com a criação da primeira classe de exemplo.

Devemos criar uma classe que, de preferência seja única, para representar o nosso objeto. Não faz sentido termos duas classes com o mesmo nome em um projeto.

Uma classe definirá o comportamento de um objeto através de, ações e características ou métodos e atributos, em uma linguagem mais científica e computacional.

Cada atributo conterá um valor específico e cada método uma lógica de processamento específica, para cada objeto derivado desta classe. Podemos ter vários objetos instanciados de uma mesma classe e cada objeto terá dados próprios, apesar de serem instâncias de uma mesma classe.

O JavaScript trabalha de uma forma diferente das demais linguagens quando se trata de criação de classes. Na versão ES6 e nas futuras versões, você encontrará estruturas mais familiares às demais linguagens. Na versão ES5 o JavaScript ainda possui uma estrutura muito característica para trabalhar com classes.

No JavaScript utilizamos sempre uma função para criar uma classe. Veja os três exemplos mais simples e mais utilizados para a criação:

```javascript
<script>
    function Person() {

    }

    var Person = function Person() {

    }

    var Person = {

    }
</script>

```
Ao criar uma classe, utilize sempre o padrão de iniciar o nome da classe com letra maiúscula, para diferenciar das demais funções. Caso queira criar uma classe com nome composto, deve utilizar o padrão camelcase. Exemplo: PersonWithCamelCase().

Dentro destas classes devemos adicionar atributos e métodos, como exemplificamos no módulo anterior.

Quando instanciamos um novo objeto de uma determinada classe, temos à disposição todos os métodos e atributos desta classe no objeto, para utilizarmos da maneira que quisermos.

No próximo módulo adicionaremos os atributos e métodos a nossa classe Person.

[Voltar ao Índice](#indice)

---

## <a name="parte5">Metodos e atributos</a>

Mostraremos qual a diferença entre atributo e método. Veja como criar atributos em uma classe.
```javascript


<script>
    function Person() {
        this.name;
        this.age;
        this.height;   
    }
</script>

```

Observe que adicionamos os atributos sem valores específicos. Você pode atribuir valores nulos ou valores pré-definidos. O comum é criar de forma vazia para que o valor seja atribuído quando o objeto for instanciado.

Na classe Person você pode ver três atributos ou características. Para trabalhar com esta classe, criaremos um novo objeto que receberá uma instância desta classe. Veja abaixo:

```
var leonan = new Person();
```

Note que estamos atribuindo um novo objeto, que é uma instância da classe Person, para a variável leonan. À partir deste ponto temos acesso a: altura, idade e ao nome do objeto leonan.

Caso queira conferir, você pode adicionar um log para inspecionar no browser.
```
<script>
    function Person() {
        this.name;
        this.age;
        this.height;   
    }

    var leonan = new Person()
    console.log(leonan)
</script>
```

Veja o resultado do developer tools informando que a variável leonan é um objeto da classe Person.

![Objeto Person](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/03-OrientacaoObjetosComJavascript-ES5/git-img/object_person.png?raw=true)

Para atribuir valores aos atributos, podemos acessá-los da seguinte forma:
```
var leonan = new Person()
leonan.name = "Leonan"
leonan.age = 23
leonan.height = 1.76

console.log(leonan)
```
O console deverá mostrar o seguinte resultado:

![Atributos](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/03-OrientacaoObjetosComJavascript-ES5/git-img/object_person_atributos.png?raw=true)

Para que você entenda o conceito de objeto e veja a possibilidade de usar uma mesma classe para duas pessoas diferentes, analise o código abaixo:
```
var leonan = new Person()
leonan.name = "Leonan"
leonan.age = 23
leonan.height = 1.76

var victor = new Person()
victor.name = "Victor"
victor.age = 23
victor.height = 1.76

console.log(leonan)
console.log(victor)
```

Acesse o navegador e analise o console. Você verá que se tratam de dois objetos diferentes e com dados diferentes, mas instâncias de uma mesma classe. Este é o conceito de reaproveitamento de código que nos referimos nos módulos anteriores.

Você pode criar quantos objetos forem necessários para sua aplicação, basta instanciar e utilizar.

### Métodos

Métodos são funções internas a uma determinada classe, ou seja, funções dentro de funções.

Diferentemente dos atributos que só guardam valores, os métodos são capazes de processar os atributos e retornar outros valores através de uma lógica pré-estabelecida.

```
<script>
function Person() {
    this.name;
    this.age;
    this.height;   

    this.sayHello = function(){
        console.log('Hello')
    }
}
</script>
```

Observe que, além dos três atributos agora temos um método chamado sayHello. Este método estará disponível tanto no objeto leonan, quanto no objeto victor. Basta acessar o console para conferir.

Este método precisa ser executado para ter o efeito esperado. Caso não seja executado ele apenas estará disponível no objeto, sem efeito algum.

Para executar a função, basta acessar diretamente assim como qualquer atributo. Veja abaixo:

```
var leonan = new Person()
leonan.sayHello()

var victor = new Person()
victor.sayHello()
Você poderia trabalhar com métodos dinâmicos, que recebem parâmetros. Desta forma você pode ter uma função que imprime uma mensagem de saudação, por exemplo. Veja o exemplo abaixo onde passamos o atributo name do objeto, como parâmetro, para o método.

function Person() {
    this.name;
    this.age;
    this.height;   

    this.sayHello = function(name){
        console.log('Hello ' + name)
    }
}

var leonan = new Person()
leonan.name = "Leonan"
leonan.age = 23
leonan.height = 1.76
leonan.sayHello(leonan.name)
```

Desta forma o método sayHello devolverá a seguinte mensagem, no console:
```
Hello Leonan
```

O último ponto importante a ser ressaltado é o uso do operador this. Caso você tente criar um método dentro da classe sem o uso deste operador, o mesmo não fará parte do escopo e você não conseguirá acessá-lo através do objeto. É muito importante o uso do this, para que sua classe tenha os atributos e métodos associados corretamente a ela.

Você entenderá melhor este conceito quando falarmos de modificadores de acesso. No momento, apenas entenda estes conceitos de métodos e atributos e saiba diferenciá-los.

```html

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Metodos e atributos</title>
</head>
<body>
<script>

    function Pessoa() {
        this.name;
        this.age;
        this.height;
        
        this.sayHello = function (name) {
            console.log('OLá '+ name)
        }

    }

    var jose = new Pessoa();
    jose.nome = "José Malcher"
    jose.age = 33
    jose.height = 1.75
    jose.sayHello(jose.nome)

    console.log(jose)

</script>
</body>
</html>

```

[Voltar ao Índice](#indice)

---

## <a name="parte6">Encapsulamentos</a>


[Voltar ao Índice](#indice)

---

## <a name="parte7">Métodos estáticos</a>


[Voltar ao Índice](#indice)

---

## <a name="parte8">Construtor</a>


[Voltar ao Índice](#indice)

---

## <a name="parte9">Modificadores de acesso</a>


[Voltar ao Índice](#indice)

---

## <a name="parte10">Prototype object</a>


[Voltar ao Índice](#indice)

---

## <a name="parte11">Herança via prototype</a>


[Voltar ao Índice](#indice)

---

## <a name="parte12">Polimorfismo</a>


[Voltar ao Índice](#indice)

---

## <a name="parte13">Finalizando</a>


[Voltar ao Índice](#indice)

---