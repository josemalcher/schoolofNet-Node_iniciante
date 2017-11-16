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


[Voltar ao Índice](#indice)

---

## <a name="parte5">Metodos e atributos</a>


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