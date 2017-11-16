# Orientação a Objetos com Javascript - ES5 - V2

Resumo do curso:

https://www.schoolofnet.com/curso-orientacao-objetos-com-javascript-es5/

---

## <a name="indice">Índice</a>

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

Acabamos de apresentar um pilar da programação orientada a objetos, que são as classes. Agora, mostraremos um segundo pilar que se chama encapsulamento.

Encapsulamento é a separação das características internas e externas de um objeto. O objetivo de utilizar o encapsulamento é proteger os nossos atributos, tendo em vista que passamos a não ter acesso direto aos atributos, mas sim a uma função que terá como principal objetivo gerenciar as entradas e saídas de dados. Estas funções são chamadas de getters e setters.

Método |	Descrição
--- | ---
get |	Pega valor do atributo
set |	Define valor ao atributo

Criando getters e setters
```javascript

<script>
    function Person() {
        this.name;
        this.age;
        this.height;   

        this.sayHello = function(name){
            console.log('Hello ' + name)
        }

        this.getName = function getName(){
            return this.name
        }

        this.setName = function setName(_name){
            this.name = _name
        }

        this.getAge = function (){
            return this.age
        }

        this.setAge = function (_age){
            this.age = _age
        }

        this.getHeight = function getHeight(){
            return this.height
        }

        this.setHeight = function setHeight(_height){
            this.height = _height
        }
    }

    var leonan = new Person()
    leonan.setName('Leonan')
    leonan.setAge(23)
    leonan.setHeight(1.76)
    leonan.sayHello(leonan.getName())

    console.log(leonan)
</script>
```

Observe que atribuímos os valores através do método set e não mais diretamente. Na função sayHello que passávamos o valor diretamente, estamos utilizando o método get.

Criamos um acesso protegido para os atributos da nossa classe, porém os mesmos ainda estão acessíveis diretamente. Para que nosso encapsulamento seja completo, removendo qualquer acesso externo direto, temos que alterar a forma de declarar os atributos e também os acessos dos getters e setters aos mesmos. Veja como ficará o código .
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Encapsulamento</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person() {
        var name;
        var age;
        var height;

        this.sayHello = function(name){
            console.log('Hello ' + name)
        }

        this.getName = function getName(){
            return name
        }

        this.setName = function setName(_name){
            name = _name
        }

        this.getAge = function (){
            return age
        }

        this.setAge = function (_age){
            age = _age
        }

        this.getHeight = function getHeight(){
            return height
        }

        this.setHeight = function setHeight(_height){
            height = _height
        }
    }

    var jose = new Person()
    jose.setName('JOSE MALCHER')
    jose.setAge(33)
    jose.setHeight(1.75)
    jose.sayHello(jose.getName())

    console.log(jose)
</script>
</body>
</html>
```

Note que estamos declarando variáveis que só estão disponíveis dentro da classe, sendo acessada apenas por métodos internos. Se você analisar o console agora, verá que os atributos não estão mais disponíveis.

Nos métodos getters e setters também estamos acessando as variáveis diretamente sem o operador this, por estar dentro do contexto da classe.

Se você der um console log em algum atributo diretamente, terá como resultado o undefined.
```
console.log(jose.name)
```
Após realizar estas alterações, temos os atributos privados. Você entenderá melhor este conceito quando falarmos sobre modificadores de acesso.

Por enquanto você deve entender que temos três atributos encapsulados e que só podemos acessá-los através dos métodos get e set.


[Voltar ao Índice](#indice)

---

## <a name="parte7">Métodos estáticos</a>

Ensinamos que atributos e métodos são partes da estrutura de uma classe. Existe uma variação de tipo de atributo e método.

Há o método estático e o método convencional, assim como os atributos. A diferença entre eles é a seguinte:

no método e atributo convencional, temos acesso apenas através de um objeto que instancia uma classe

no método estático, podemos ter acesso direto através da classe somente, sem que precise ser instanciado um novo objeto.

Veja os exemplos abaixo:

```
// Criando método estático
Person.static_method = function(){
    console.log('This is my first static method');
}

// Criando atributo estático
Person.static_attr = 'my_first_attr_static';

// Chamando método estático
Person.static_method();

// Imprimindo atributo estático
console.log(Person.static_attr);
```

Observe que para criarmos atributos e métodos estáticos, basta acessarmos, diretamente, a classe e atribuir o valor ou a função que queremos. Estes atributos e métodos não estão presentes no objeto instanciado, se for conferir no console. Mas ele estará disponível para utilizar em seu código em tempo de execução.

Abra o developer tools do seu navegador e acesse o console para verificar os métodos estáticos trabalhando corretamente.

A desvantagem de utilizar métodos e atributos estáticos é que eles não tem acesso aos atributos e métodos internos da classe, ou seja, se precisarmos de algum atributo de algum objeto instanciado, não teremos acesso. Veja alguns exemplos em que não seriam possíveis.

```
// Tentando utilizar método sayHello dentro do método estático
Person.static_method = function(){
    this.sayHello('Leonan');
    console.log('This is my first static method');
}

// Tentando concatenar o atributo name dentro do método estático
Person.static_method = function(){
    console.log('This is my first static method' + name);
}
```

Nas situações acima não conseguiremos ter sucesso porque estamos tentando acessar valores que necessitam de uma instância para serem acessados.

Portanto, você deve analisar seu projeto e verificar a necessidade do uso de métodos estáticos ou não, lembrando sempre que em caso de métodos estáticos, a lógica não pode depender de nenhum valor de instância da classe.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Métodos Estáticos</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person() {
        var name;
        var age;
        var height;

        this.sayHello = function (name) {
            console.log('Hello ' + name)
        }

        this.getName = function getName() {
            return name
        }

        this.setName = function setName(_name) {
            name = _name
        }

        this.getAge = function () {
            return age
        }

        this.setAge = function (_age) {
            age = _age
        }

        this.getHeight = function getHeight() {
            return height
        }

        this.setHeight = function setHeight(_height) {
            height = _height
        }
    }

    Person.static_method = function () {
        console.log('AQUI é um Métdo Estático!')
    }
    Person.static_method();

    Person.static_atributo = 'Meu Atributo Statico';
    console.log(Person.static_atributo);

    var jose = new Person()
    jose.setName('JOSE MALCHER')
    jose.setAge(33)
    jose.setHeight(1.75)
    jose.sayHello(jose.getName())

    console.log(jose)
</script>
</body>
</html>
```

[Voltar ao Índice](#indice)

---

## <a name="parte8">Construtor</a>

O construtor deve estabelecer um padrão de como o objeto deve ser criado ao instanciar uma determinada classe.

Pegando ainda o exemplo da classe Person, imagine que os atributos name, age e height sejam valores que devam ser passados obrigatoriamente no momento de instanciar um objeto. Isso significa que podemos utilizar o construtor para atribuir os valores a estes atributos, automaticamente, no momento de instanciar um novo objeto. Veja o exemplo abaixo:

```
// Veja como deverá ser criada a função e a atribuição de dados
function Person(_name, _age, _height) {
    var name   = _name;
    var age    = _age;
    var height = _height;  
}

// Como instanciar um objeto com construtor
var leonan = new Person('Leonan', 23, 1.76)
// leonan.setName('Leonan')
// leonan.setAge(23)
// leonan.setHeight(1.76)
```

Observe que, como estamos passando os dados na construção do objeto, não precisamos mais utilizar os métodos setters para atribuição de valores, pois a própria classe se encarrega disso. Por este motivo, comentamos as atribuições acima, deixando por conta da classe.

Se olhar no console do navegador, terá os mesmos resultados anteriores porque a atribuição continua sendo feita, só que de forma diferente e automática.

Para modificar algum valor inicial, deve-se utilizar o método set. Vale lembrar que os valores iniciais serão sobrescritos.

Caso precise pegar algum valor, deverá utilizar os métodos getters, normalmente.

Existe outra forma de trabalhar com construtor no JavaScript ES5. Seria utilizando um método inicial que deve ser executado a cada instância de objeto. Veja exemplo abaixo:

```
// Veja como deverá ser criada a função e a atribuição de dados
function Person(_name, _age, _height) {
    var name   = _name;
    var age    = _age;
    var height = _height;

    this.initialize = function(){
        console.log('init function');
    } 
}

// Como instanciar um objeto com construtor
var leonan = new Person('Leonan', 23, 1.76)
leonan.initialize()
```

Perceba que a cada nova instância, o método construtor deverá ser executado, caso contrário a característica de inicialização não será efetivada.

Desta forma você pode configurar qualquer característica e ação inicial para sua classe. Basta fazer toda lógica na função inicial e chamá-la. Porém, esta prática pode alocar espaço desnecessário em memória.

Podemos utilizar o prototype object para evitar o uso indevido de memória, obrigando todas as instâncias derivarem de uma mesma instância. Este é um assunto que será abordado nos próximos módulos.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Métodos Estáticos</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person(_name, _age, _height) {
        var name   = _name;
        var age    = _age;
        var height = _height;

        this.initialize  = function () {
            console.log('FUNÇÃO initialize ')
        }

        this.sayHello = function (name) {
            console.log('Hello ' + name)
        }

        this.getName = function getName() {
            return name
        }

        this.setName = function setName(_name) {
            name = _name
        }

        this.getAge = function () {
            return age
        }

        this.setAge = function (_age) {
            age = _age
        }

        this.getHeight = function getHeight() {
            return height
        }

        this.setHeight = function setHeight(_height) {
            height = _height
        }
    }

    Person.static_method = function () {
        console.log('AQUI é um Métdo Estático!')
    }
    Person.static_method();

    Person.static_atributo = 'Meu Atributo Statico';
    console.log(Person.static_atributo);

    var jose = new Person('José Malcher', 33, 1.75)
    jose.initialize()
    /*jose.setName('JOSE MALCHER')
    jose.setAge(33)
    jose.setHeight(1.75)*/
    jose.sayHello(jose.getName())

    console.log(jose)
</script>
</body>
</html>

```

[Voltar ao Índice](#indice)

---

## <a name="parte9">Modificadores de acesso</a>

Modificadores de acesso são formas que temos para liberar ou bloquear acessos a determinados atributos ou métodos. Podemos torná-los acessíveis ou protegidos, de acordo com a maneira que os implementamos.

O JavaScript não tem uma forma declarada para trabalhar com modificadores de acesso, assim como outras liguagens que possuem algum operador ou estrutura determinada. É possível implementá-lo com o contexto de escopo.

Há atributos e métodos privados e também os públicos. Isso quer dizer que podemos deixar público para acessos externos e privado, somente para acessos interno.

Quando falamos interno, significa que podemos utilizar somente dentro do escopo da classe. Já fizemos este procedimento indiretamente, mas não comentamos sobre ele.

Quando podemos acessar diretamente um método, através de um objeto instanciado, podemos dizer que este método é público. Veja exemplos de métodos e atributos públicos:

```
// Classe com métodos e atributos públicos
function Person() {
  this.name;
  this.age;
  this.height;   

  this.initialize = function(){
      console.log('init function');
  }

  this.sayHello = function(name){
      console.log('Hello ' + name)
  }
}

// Acessando método externamente
var leonan = new Person('Leonan', 23, 1.76)
leonan.sayHello(leonan.getName())
```

Agora veja a mesma classe com com os mesmos métodos e atributos, porém privados:

```
// Classe com métodos e atributos privados
function Person() {
  var name;
    var age;
    var height;   

  function initialize(){
      console.log('init function');
  }

  function sayHello(name){
      console.log('Hello ' + name)
  }
}
```

Quando utilizamos o operador this, estamos permitindo o acesso de objetos que instanciaram a classe, tornando o acesso público. Quando criamos métodos e atributos sem o operador this, estamos dizendo que pertencem somente ao contexto interno da classe, sem que seja possível acessar externamente. Este é o conceito de modificador de acesso.

Sempre utilize modificador de acesso para proteger dados que necessitem de segurança. Desta forma, você garante que ninguém tenha acesso aos dados durante o processamento da classe, podendo retornar apenas um resultado, depois de toda lógica aplicada.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modificadores de Acesso</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person(_name, _age, _height) {
        var name   = _name;
        var age    = _age;
        var height = _height;

        this.initialize  = function () {
            console.log('FUNÇÃO initialize ')
        }

        function funcaoPrivada() {
            console.log('Exemplo de Função Privada')
        }

        this.sayHello = function (name) {
            console.log('Hello ' + name)
        }

        this.getName = function getName() {
            return name
        }

        this.setName = function setName(_name) {
            name = _name
        }

        this.getAge = function () {
            return age
        }

        this.setAge = function (_age) {
            age = _age
        }

        this.getHeight = function getHeight() {
            return height
        }

        this.setHeight = function setHeight(_height) {
            height = _height
        }
    }

    Person.static_method = function () {
        console.log('AQUI é um Métdo Estático!')
    }
    Person.static_method();

    Person.static_atributo = 'Meu Atributo Statico';
    console.log(Person.static_atributo);

    console.log(new Person())

    var jose = new Person('José Malcher', 33, 1.75)
    jose.sayHello(jose.getName())
    console.log(jose)
    console.log(jose.name) // propriedade é privada!
    console.log(jose.funcaoPrivada)// private 
</script>
</body>
</html>

```

[Voltar ao Índice](#indice)

---

## <a name="parte10">Prototype object</a>

O prototype é um dos pilares que constitui a orientação a objetos. É um recurso particular do JavaScript.

Falaremos sobre este recurso e como podemos tirar proveito dele.

Lembrando do método construtor que mostramos no oitavo módulo, o método initialize precisaria ser executado a cada objeto instanciado para que os dados fossem inclusos na inicialização da classe.

Veja exemplo abaixo:
```
var object1 = new Person('object1', 23, 1.76)
object1.initialize()
var object2 = new Person('object2', 30, 1.63)
object2.initialize()
var object3 = new Person('object3', 27, 1.70)
object3.initialize()
```

Assim, podemos ver que se fossem muitos objetos, teríamos que reservar muito espaço na memória do sistema.

Todo objeto instanciado ou classe criada, possui o prototype nativamente. Para verificar, basta adicionar o código abaixo em seu projeto e abrir o console do navegador.

```
var object1 = new Person('object1', 23, 1.76)

console.log(object1.__proto__);
console.log(Person.prototype);
```

Observe que podemos acessar o prototype através do objeto com alias proto ou através da classe, acessando diretamente o prototype. Ambos mostraram o mesmo resultado.
```
// Através do objeto com __proto__
> constructor:ƒ Person(_name, _age, _height)
> __proto__:Object

// Através da classe com prototype
> constructor:ƒ Person(_name, _age, _height)
> __proto__:Object
```

Isso quer dizer que só possuímos um método registrado no prototype, que é o construtor.

Para melhorar esta prática, podemos utilizar o prototype incluindo métodos a todos os objetos instanciados de uma só vez, independente da quantidade existente. Para incluir um método a qualquer objeto da classe, basta executar o código abaixo:

```
Person.prototype.initialize = function initialize(){
    console.log('initialize with prototype')
}

var object1 = new Person('Leonan', 23, 1.76)
var object2 = new Person('Leonan', 23, 1.76)
var object3 = new Person('Leonan', 23, 1.76)
```

Após adicionar a primeira linha, podemos analisar o console novamente e teremos em todos os objetos a função initialize dentro de cada objeto, ou seja, não será preciso alocar mais memória, uma vez que podemos aproveitar o espaço que já foi reservado ao objeto, pois a função está alocada dentro do mesmo.

No console teremos o seguinte resultado para os três objetos:

```
{initialize: ƒ, constructor: ƒ}
> initialize:ƒ initialize()
> constructor:ƒ Person(_name, _age, _height)
> __proto__:Object
```

Isso significa que agora podemos acessar o método initialize no prototype do objeto, sem precisar acessar o método initialize da classe Person.

Veja o exemplo:
```
object1.__proto__.initialize()
object2.__proto__.initialize()
object3.__proto__.initialize()
```

O resultado ao acionarmos o método initialize da classe será o mesmo de acessar via prototype, porém com prototype ganhamos produtividade e performance. Estendemos uma determinada propriedade para qualquer objeto instanciado, aplicando apenas uma vez o método à classe.

Outra vantagem está ao comparar o uso do prototype com métodos estáticos.

```
Person.myStaticFunc = function(){
    console.log('Static method');
}

Person.prototype.myProtoFunc = function(){
    console.log('Prototype method');
}

var object1 = new Person('Leonan', 23, 1.76)

object1.myProtoFunc();
object1.myStaticFunc();
```

Veja que não temos acesso ao método estático através do objeto instanciado, porém o prototype nos permite este acesso.

O prototype, além de todas as vantagens mencionadas, nos permite trabalhar com herança, que é um dos pilares mais importantes da programação orientada a objetos.

Falaremos sobre herança no próximo módulo.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modificadores de Acesso</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person(_name, _age, _height) {
        var name   = _name;
        var age    = _age;
        var height = _height;

        this.initialize  = function () {
            console.log('FUNÇÃO initialize ')
        }

        function funcaoPrivada() {
            console.log('Exemplo de Função Privada')
        }

        this.sayHello = function (name) {
            console.log('Hello ' + name)
        }

        this.getName = function getName() {
            return name
        }

        this.setName = function setName(_name) {
            name = _name
        }

        this.getAge = function () {
            return age
        }

        this.setAge = function (_age) {
            age = _age
        }

        this.getHeight = function getHeight() {
            return height
        }

        this.setHeight = function setHeight(_height) {
            height = _height
        }
    }

    Person.static_method = function () {
        console.log('AQUI é um Métdo Estático!')
    }
    Person.static_method();

    Person.static_atributo = 'Meu Atributo Statico';

    Person.prototype.minhaProtoFunc = function () {
        console.log('Minha primeira FUNÇÃO PROTOTYPE ')
    }

    console.log(Person.static_atributo);

    console.log(new Person())

    var jose = new Person('José Malcher', 33, 1.75)
    jose.sayHello(jose.getName())
    console.log(jose)
    console.log(jose.name) // propriedade é privada!
    console.log(jose.funcaoPrivada)// private

    console.log(jose.__proto__)
    console.log(Person.prototype)

    jose.minhaProtoFunc();

</script>
</body>
</html>

```

[Voltar ao Índice](#indice)

---

## <a name="parte11">Herança via prototype</a>

Herança pode ser classificada como um mecanismo para estender funcionalidades de uma classe para outra. Isso quer dizer que, podemos executar funções de uma classe herdada através do objeto instanciado pela classe que a estendeu.

Para a herança existir precisamos de duas classes, onde uma herdará a outra.

```javascript
function Person(_name, _age, _height) {
    var name   = _name
    var age    = _age
    var height = _height

    this.initialize = function(){
        console.log('init function')
    }

    this.sayHello = function(name){
        console.log('Hello ' + name)
    }

    this.getName = function getName(){
        return name
    }

    this.setName = function setName(_name){
        name = _name
    }

    this.getAge = function (){
        return age
    }

    this.setAge = function (_age){
        age = _age
    }

    this.getHeight = function getHeight(){
        return height
    }

    this.setHeight = function setHeight(_height){
        height = _height
    }
}

Person.prototype.happyBirthday = function(){
    return this.setAge(this.getAge() +1)
}

function Employee(_name, _age, _height) {
    var salary

    Person.call(this, _name, _age, _height)

    this.getSalary = function getSalary(){
        return salary
    }

    this.setSalary = function setSalary(_salary){
        salary = _salary
    }
}

Employee.prototype = Object.create(Person.prototype)

var leonan = new Employee('Leonan', 23, 1.76)
console.log(leonan.getAge())
leonan.happyBirthday()
console.log(leonan.getAge())
```

Analisando o código acima você pode encontrar as classes Person e Employee.

Se pensamos no mundo real, um funcionário não deixa de ser uma pessoa, então faz todo sentido que um funcionário herde os atributos e métodos da classe person. Foi isto que fizemos acima. Analise o código mais importante, que é a criação da herança.

```
function Employee(_name, _age, _height) {
    var salary

    Person.call(this, _name, _age, _height)

    this.getSalary = function getSalary(){
        return salary
    }

    this.setSalary = function setSalary(_salary){
        salary = _salary
    }
}

Employee.prototype = Object.create(Person.prototype)
```

Perceba que, para criar a herança temos que chamar a classe mãe dentro da classe que a herdará.

```
Person.call(this, _name, _age, _height)
```

Como estamos chamando a classe, temos que passar os dados do construtor que a classe pai exige. Depois de chamar a classe pai com o método call, precisamos alinhar os prototypes para que a herança exista sem precisarmos ficar fazendo correções.

```
Employee.prototype = Object.create(Person.prototype)
```

Existe outra forma de trabalhar com herança onde temos que realocar os construtores, mas este método exige um nível de adaptação e correção muito alto, portanto opte por trabalhar com o alinhamento de prototypes, onde utilizamos o método Object.create, assim o JavaScript faz todas as adaptações automaticamente.

Depois de criar a herança, note que no exemplo estamos instanciando um objeto da classe Employee.

```
var leonan = new Employee('Leonan', 23, 1.76)
console.log(leonan.getAge())
leonan.happyBirthday()
console.log(leonan.getAge())
```

Após instanciar o objeto, imprimimos a idade do mesmo através do método getAge. Se observar, a classe Employee não possui este método. Este é o primeiro sinal da herança sendo evidenciado, pois estamos utilizando um método da classe mãe.

Em seguida, executamos um método registrado através do prototype da classe mãe, mas como alinhamos os prototypes, podemos utilizar por fazer parte da herança.

Veja o registro do método no prototype:

```
Person.prototype.happyBirthday = function(){
    return this.setAge(this.getAge() +1)
}
```

Este método faz com que a pessoa faça aniversário somando um ano à idade atual da mesma. Veja que o método utiliza o set e o get da classe mãe para efetuar a lógica e retornar a nova idade, pós aniversário.

Então, finalizamos o exemplo imprimindo a nova idade.

Perceba como podemos criar heranças, facilmente, através do JavaScript, apesar de ter uma forma particular de trabalhar com a herança.

O importante é você entender que todos os métodos e atributos que forem comuns às duas classes, devem estar na classe mãe e os métodos e atributos únicos devem estar na classe filha, uma vez que o objeto sempre terá acesso a todos os métodos e atributos presentes em ambas as classes.

Para analisar todos os métodos e atributos presentes no objetos, basta adicionar o código abaixo e abrir o console do navegador.

```
var leonan = new Employee('Leonan', 23, 1.76)
console.log(leonan)
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Modificadores de Acesso</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person(_name, _age, _height) {
        var name   = _name;
        var age    = _age;
        var height = _height;

        this.initialize  = function () {
            console.log('FUNÇÃO initialize ')
        }

        function funcaoPrivada() {
            console.log('Exemplo de Função Privada')
        }

        this.sayHello = function (name) {
            console.log('Hello ' + name)
        }

        this.getName = function getName() {
            return name
        }

        this.setName = function setName(_name) {
            name = _name
        }

        this.getAge = function () {
            return age
        }

        this.setAge = function (_age) {
            age = _age
        }

        this.getHeight = function getHeight() {
            return height
        }

        this.setHeight = function setHeight(_height) {
            height = _height
        }
    }

    Person.static_method = function () {
        //console.log('AQUI é um Métdo Estático!')
    }
    Person.static_method();

    Person.static_atributo = 'Meu Atributo Statico';

    Person.prototype.minhaProtoFunc = function () {
        console.log('Minha primeira FUNÇÃO PROTOTYPE ')
    }

    Person.prototype.FazAniversario = function () {
        return this.setAge(this.getAge()+ 1)
    }


    function Empregado(_name, _age, _hight) {
        var salario

        Person.call(this, _name, _age, _hight)

        this.getSalario = function () {
            return salario
        }
        this.setSalario = function (_salario) {
            salario = _salario
        }
    }

    Empregado.prototype = Object.create(Person.prototype)

    var jose = new Empregado('José Malcher Jr.', 33, 1.75)
    console.log(jose.getAge())
    jose.FazAniversario()
    console.log(jose.getAge())

 /*   console.log(Person.static_atributo);

    console.log(new Person())

    var jose = new Person('José Malcher', 33, 1.75)
    jose.sayHello(jose.getName())
    console.log(jose)
    console.log(jose.name) // propriedade é privada!
    console.log(jose.funcaoPrivada)// private

    console.log(jose.__proto__)
    console.log(Person.prototype)

    jose.minhaProtoFunc();*/

</script>
</body>
</html>

```

[Voltar ao Índice](#indice)

---

## <a name="parte12">Polimorfismo</a>

Polimorfismo é uma técnica que consiste em criar métodos com o mesmo nome ou assinatura, com comportamentos totalmente diferentes. O polimorfismo é criado quando temos o relacionamento de herança, ou seja, temos uma classe chamada happyBirthday na classe mãe e também na classe filha, porém com comportamentos distintos.

```javascript
// Criando objeto da classe mãe e utilizando o método happyBirthday
var victor = new Person('Victor', 22, 1.70)
console.log(victor.getName(), victor.getAge())
victor.happyBirthday()
console.log(victor.getName(), victor.getAge())

// Criando objeto da classe filha e utilizando o método happyBirthday da classe filha
var leonan = new Employee('Leonan', 23, 1.76)
console.log(leonan.getName(), leonan.getAge())
leonan.happyBirthday = function happyBirthday(){
    return this.setAge(this.getAge() + 2)
}
leonan.happyBirthday()
console.log(leonan.getName(), leonan.getAge())

```
Analisando o código acima, você pode ver que o objeto victor pertence a classe mãe Person, portanto não possui os métodos da classe filha Employee.

Executamos o método happyBirthday do prototype da classe mãe, onde não temos nenhum polimorfismo, uma vez que existe somente este método na classe mãe com este nome.

O polimorfismo acontece no segundo exemplo, onde instanciamos um objeto da classe Employee, que é filha da classe Person. Neste caso, criamos um método chamado happyBirthday e teremos dois métodos com o mesmo nome. Um vindo da classe mãe, por herança, e outro criado na classe filha. Cada método executa uma lógica diferente.

Veja que o primeiro soma um ano à idade atual e o segundo soma dois anos.

O resultado que você deve ter no console está abaixo:
```
Victor 22
Victor 23
Leonan 23
Leonan 25
```
Caso não tivéssemos criado o método happyBirthday na classe filha, o resultado para a idade de Leonan seria 24, pois executaria o método da classe mãe que soma apenas um ano à idade.

Como o método foi criado, o JavaScript entende que o método da classe mãe deve ser sobrescrito, ignorando a lógica anterior. Este é um exemplo simples de polimorfismo sendo executado entre classes com herança.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Polimorfismo</title>
</head>
<body>
<p>Ver Log's</p>
<script>
    function Person(_name, _age, _height) {
        var name   = _name;
        var age    = _age;
        var height = _height;

        this.initialize  = function () {
            console.log('FUNÇÃO initialize ')
        }

        function funcaoPrivada() {
            console.log('Exemplo de Função Privada')
        }

        this.sayHello = function (name) {
            console.log('Hello ' + name)
        }

        this.getName = function getName() {
            return name
        }

        this.setName = function setName(_name) {
            name = _name
        }

        this.getAge = function () {
            return age
        }

        this.setAge = function (_age) {
            age = _age
        }

        this.getHeight = function getHeight() {
            return height
        }

        this.setHeight = function setHeight(_height) {
            height = _height
        }
    }

    Person.static_method = function () {
        //console.log('AQUI é um Métdo Estático!')
    }
    Person.static_method();

    Person.static_atributo = 'Meu Atributo Statico';

    Person.prototype.minhaProtoFunc = function () {
        console.log('Minha primeira FUNÇÃO PROTOTYPE ')
    }

    Person.prototype.FazAniversario = function () {
        return this.setAge(this.getAge()+ 1)
    }


    function Empregado(_name, _age, _hight) {
        var salario

        Person.call(this, _name, _age, _hight)

        this.getSalario = function () {
            return salario
        }
        this.setSalario = function (_salario) {
            salario = _salario
        }
    }

    Empregado.prototype = Object.create(Person.prototype)

    var jose = new Empregado('José Malcher Jr.', 33, 1.75)
    console.log(jose.getAge())

    jose.FazAniversario = function FazAniversario() {
        return this.setAge(this.getAge()+ 2)
    }

    jose.FazAniversario()
    console.log(jose.getAge())

    /*   console.log(Person.static_atributo);

       console.log(new Person())

       var jose = new Person('José Malcher', 33, 1.75)
       jose.sayHello(jose.getName())
       console.log(jose)
       console.log(jose.name) // propriedade é privada!
       console.log(jose.funcaoPrivada)// private

       console.log(jose.__proto__)
       console.log(Person.prototype)

       jose.minhaProtoFunc();*/

</script>
</body>
</html>

```

[Voltar ao Índice](#indice)

---

## <a name="parte13">Finalizando</a>


[Voltar ao Índice](#indice)

---