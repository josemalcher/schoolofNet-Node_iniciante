# Node.js básico

Resumo do curso:

https://www.schoolofnet.com/curso-node-js-basico/

---

## <a name="indice">Índice</a>

- [Introdução](#parte1)
- [Configurando ambiente de desenvolvimento](#parte2)
- [O que é node.js?](#parte3)
- [O que é npm?](#parte4)
- [Criando o primeiro projeto](#parte5)
- [Trabalhando com http](#parte6)
- [Como utilizar módulos](#parte7)
- [Trabalhando com arquivos](#parte8)
- [Trabalhando com evento emitter](#parte9)
- [Adicionar pacotes externos ](#parte10)
- [Remover e atualizar pacotes externos](#parte11)
- [Publicar um pacote no npm ](#parte12)
- [Trabalhando com Websockets ](#parte13)
- [Principais frameworks](#parte14)
- [Iniciando com Express.js](#parte15)
- [Finalizando](#parte16)
  

---

## <a name="parte1">Introdução</a>


Neste conteúdo falaremos sobre os conceitos básicos de Node.js.

Daremos uma breve introdução sobre a plataforma, ensinaremos a configurar um ambiente, passaremos os principais conceitos de Node.js e, também, os conceitos que envolvem o npm. Em seguida, vocês aprenderão a trabalhar com uma série de classes, que o Node disponibiliza em sua API nativa, que são: http, arquivo e evento emitter.

Quando terminarmos os módulos de classes, falaremos um, pouco, sobre: programação orientada a eventos, como administrar pacotes externos, websockets. Por último, falaremos, um pouco, sobre os principais frameworks da plataforma.

Sejam bem-vindos a mais um conteúdo da School of Net.


https://nodejs.org/en/docs/

[Voltar ao Índice](#indice)

---

## <a name="parte2">Configurando ambiente de desenvolvimento</a>

Configuraremos um ambiente para darmos continuidade ao conteúdo e consigamos aprender como criar aplicativos, utilizando a plataforma Node.js.

Uma das primeiras informações que devemos passar é que o Node é multiplataforma. Não importa qual o sistema operacional que estiverem utilizando, vocês conseguirão trabalhar com Node.

Para fazerem a instalação da plataforma basta acessar o site na área de download: https://nodejs.org/en/download/. No momento em que este conteúdo foi criado as versões disponíveis eram: v4.6.0 LTS e v6.7.0 Current. A versão recomendada, sempre, é a versão LTS, mas vocês podem escolher com qual querem trabalhar. Quando estiverem lendo este conteúdo, pode ser que as versões já tenham sido atualizadas.

Quando acessarem a àrea de download, vocês verão que existem instaladores para todos os sistemas operacionais. Antes de instalar, vocês devem saber a direfença entre versão LTS e Current.

1- A LTS é a versão mais utilizada pelos usuários e sempre é a recomendada porque ela é uma versão que está sendo mantida pela equipe de desenvolvedores do Node.js e existe suporte à linguagem. Ela é recomendada por ser mais estável e por ter uma probabilidade menor de conflitos de linguagem.  
2- A Current é a última versão lançada, que geralmente está em fase de testes e vocês correm um risco maior de terem incompatibilidade, em seus projetos. Por outro lado, vocês estarão trabalhando com o que há de mais novo no Node.  

Vocês podem estar se perguntando qual deveriam utilizar. Nós, da School of Net, recomendamos, principalmente, para quem está começando, utilizar a versão LTS da plataforma. Embora as novas versões do Node, dificilmente, saem com conflitos ou erros, para evitarem problemas, melhor utilizarem a que está sendo usada pela maioria.

Se por acaso estiverem trabalhando com Windows ou MAC, vocês poderão fazer o download e instalar normalmente, como qualquer outro programa. Para Linux vocês não terão tanto problema, também, porque o site fornece os binários para download.

Se desejarem instalar o Node, diretamente, do gerenciador de pacotes do sistema operacional, vocês, também, podem. No MAC podem utilizar o brew, para Linux vocês podem instalar com apt-get e no Windows podem utilizar o choco(Chocolatey).

O resultado final das instalações será o mesmo, porém, se instalarem via terminal, vocês já terão as variáveis de ambiente, devidamente, instaladas e configuradas. Talvez, instalando manualmente, vocês tenham que fazer esta configuração manual, também.

### npm

Qualquer versão do Node que vocês escolham, trará consigo o npm(Node Package Manager), que é o gerenciador de pacotes do Node.

### Editor de texto | IDE

Para trabalharmos com códigos, utilizaremos o editor de texto Sublime Text. Acessando o site https://www.sublimetext.com/3, terão acesso ao download para que possam instalar. Fiquem tranquilos, ele roda em qualquer máquina e é muito leve. O Sublime é um editor de texto que se assemelha muito a uma IDE, por possuir muitos plugins que o ajudam, durante o desenvolvimento.

Após a instalação do editor vocês já estarão aptos a utilizá-lo, mesmo na versão gratuita, sem licença.

Conclusão

Agora que temos o Node.js e um editor de texto, instalados, estamos pronto para dar continuidade aos próximos conteúdos.

[Voltar ao Índice](#indice)

---
## <a name="parte3">O que é node.js?</a>

Neste módulo iremos falar sobre o que é a plataforma node.js, quais são as principais diferenças entre as outras plataformas e o Node e, também, o que ela traz de diferencial em termos de codificação e de plataforma.

De acordo com o site do Node, o mesmo pode ser definidio como uma biblioteca que foi criada em cima de uma engine chamada v8, que por sua vez, tem a capacidade de interpretar códigos escritos em javascript e faz a compilação. Esta é a grande novidade que o Node traz, o fato de permitir rodar javascript, do lado do servidor.

Vocês podem aproveitar todo conhecimento que possuem em javascript, para desenvolver códigos voltados para o servidor. Suponham que vocês tenham um sistema que faça consultas no banco de dados: select, insert, update, delete , um sistema que faça requisições para consultar o CEP do Correio. Antigamente, precisaríamos de uma linguagem server side para fazer este tipo de consulta ou requisição. Precisaríamos utilizar o PHP, por exemplo, juntamente com javascript, para conseguir fazer uma requisição.

Com o Node podemos fazer, diretamente, estas consultas e requisições, sem precisar de uma outra linguagem, porque ele assume este papel server side. Enviamos a requisição com javascript, ele processa no servidor e retorna, via javascript também. Temos a utilização do javascript, de ponta a ponta, no processo todo.

Além disso, ele possui alguns recursos muito interessantes. O Node utiliza programação orientada a eventos para resolver uma série de problemas e utiliza o conceito de não bloqueante. Todas as APIs do Node são desenvolvidas para não serem bloqueantes. Isso faz com que o Node tenha uma performance melhor do que outras plataformas que só permitem acesso bloqueante.

O Node traz consigo um ecossistema muito grande de packages publicados no npm, que é o gerenciador de pacotes utilizado nos projetos Node. Com esta grande quantidade de pacotes disponibilizados, teremos muito mais poder na hora de desenvolver qualquer tipo de projeto.

Logo no início da criação desta plataforma, não era tão fácil encontrar pacotes ou frameworks que pudessem facilitar a vida dos desenvolvedores. Atualmente, sua popularidade aumentou e, por este motivo, existe uma grande quantidade de códigos, bibliotecas e frameworks, sendo criados a todo momento.

### Qual o problema que o Node soluciona?

Ele vem com o objetivo de fornecer uma maneira simples e eficiente de criar programas de redes escaláveis. Isso quer dizer que, diferente de outras plataformas, o Node trabalhar de uma forma que permite muito mais processos simultâneos. Isso faz com que o servidor demore mais a cair, em casos de acessos extremos.

Apesar do Node ser, relativamente, novo, ele possui uma base bem sólida. É por este motivo que algumas empresas como: Microsoft, Heroku e várias start ups brasileiras, estão aderindo ao Node, como ferramenta de trabalho.

Atualmente, quando iniciamos a aprendizagem de uma nova linguagem, começamos, sempre, aprendendo a forma procedural, depois organizamos os pensamentos de forma orientada a objetos. Neste conteúdo vocês aprenderão a programar de forma orientada a eventos. Se pararem para pensar, isso já acontece no javascript, nativamente. Temos um exemplo de orientação a eventos que é o famoso jQuery, que é muito utilizado na web.

[Voltar ao Índice](#indice)

---
## <a name="parte4">O que é npm?</a>

O que é NPM?

NPM é um acrônimo para node package manager. Sabendo que o NPM é um gerenciador de pacotes, vocês concluem que ele serve para gerenciar algumas funcionalidades dentro do projeto.

Com base nisso, podemos dizer que: pacotes são bibliotecas ou outros projetos Node, que são feitos para ajudar um outro desenvolvedor. É possível ter vários pacotes dentro de um mesmo projeto.

Existe um arquivo chamado package.json que possui todas as informações do projeto. Temos nome, versão e, além disso, temos várias outras tags, que identificam o nosso projeto.

Para saberem quais pacotes estão disponíveis para o NPM, bastam acessar o site https://www.npmjs.com/ e pesquisarem por um pacote. Utilizando este gerenciador, vocês ficam restritos a utilizarem, apenas, pacotes que estejam no repositório oficial. Porém, ele tem uma extensão, onde vocês podem pesquisar, direto do seu Git Hub, por seus projetos.

Vamos supor que vocês não queiram implementar um projeto em Node, mas, desejam utilizá-lo para gerenciar as suas dependências. Isso é totalmente possível. Existem pessoas que utilizam o NPM para administrarem todo projeto de front-end, escrito em javascript.

Com Node é possível criarem um script dentro do arquivo package.json e executá-lo com o NPM. Vocês podem utilizar este arquivo para moverem arquivos para uma determinada pasta, por exemplo. Vocês conseguirão inserir comandos de terminal, ter este efeito sendo aplicado, tudo isso utilizando o NPM.

Além de conseguir adicionar, remover e dar update, dentro dos seus pacotes, vocês têm a possibilidade de publicar os seus próprios pacotes. Basta que tenham uma conta no site do NPM para que consigam ajudar com desenvolvimento de novos pacotes.

Com este conteúdo, já é possível ter uma base do que é o NPM e para que ele serve. Há mais um fato importante que devem saber: O NPM fornece alguns comandos.

Vejam código abaixo:

Para ter um guia de utilização, vocês podem digitar o comando abaixo, no terminal:
```
$ npm help npm
```
Com este conteúdo vocês podem tirar muitas dúvidas de como aprender e como utilizar. Existem exemplos práticos para que possam se basear, também. É uma documentação muito boa e nós aconselhamos a leitura de todo conteúdo, para que não fiquem sem entender sobre esta ferramenta maravilhosa.



[Voltar ao Índice](#indice)

---
## <a name="parte5">Criando o primeiro projeto</a>


Criando o primeiro projeto
Neste módulo ensinaremos como iniciar um projeto Node.js. Abram o terminal, para que possamos exemplificar melhor e vocês possam treinar. Para quem utiliza Windows, recomendamos instalarem o Git Bash, caso ainda não tenham instalado.

Para criarmos o arquivo package.json, onde ficarão informações do projeto e os guias para o gerenciamento dos pacotes, vocês rodem o comando, abaixo:

### npm ini

Assim que rodarem este comando, no terminal, vocês terão que passar várias informações que são referentes ao projeto. O comando utilizará estas informações para criar o arquivo package.json, que citamos acima.

```
name: (node) node-son
version: (1.0.0)
description: School of Net
entry point: (index.js) app.js
test command:
git repository:
keywords: school of net, init node.js, nodejs
author: Leonan <SON>
license: (ISC)
```

Depois de preencherem todos os dados, ele gerará um código e perguntará se está ok. Em caso afirmativo, digitamos yes e o arquivo será criado na pasta raiz, de acordo com as informações passadas. Notem que deixamos alguns itens em branco.

Vale lembrar que existe a possibilidade de criarmos um arquivo de forma manual, desde que ele tenha o nome de package.json e que esteja no formato json padrão.

```json
{
  "name": "node-son",
  "version": "1.0.0",
  "description": "School of Net",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "school",
    "of",
    "net",
    "init",
    "node.js",
    "nodejs"
  ],
  "author": "Leonan <SON>",
  "license": "ISC"
}
```

Este é o código do arquivo criado. Vocês devem ter o mesmo resultado, com algum nome diferente, por exemplo. Este código não terá efeito nenhum sobre a aplicação, se vocês não utilizarem o npm para ativar.

Como informamos que o nosso arquivo de entrada será o app.js, criaremos este arquivo para que o sistema não fique perdido procurando o arquivo e acabe gerando um erro.

### Conteúdo de app.js

```javascript
require('Hello World');
var a = 2;
var b = 2;
var c = a + b;
console.log('c -> ', c);
```

Para rodar este arquivo e verificar se está, realmente, funcionando, basta ir até o terminal e rodar o comando:

```
node app.js
```

Vocês já terão a execução do arquivo, os itens impressos na tela do terminal, assim como pedido no primeiro aplicativo criado com node.


[Voltar ao Índice](#indice)

---
## <a name="parte6">Trabalhando com http </a>

Neste módulo aprenderemos a utilizar a classe http. Criaremos o primeiro web server, utilizando Node.js.

Passaremos algumas noções básicas sobre módulos, antes de continuarmos, para que entendam o funcionamento do http. Falaremos melhor sobre este assunto, nos próximos capítulos. O Node é uma plataforma que tem várias APIs por trás de seu funcionamento. Cada API tem uma responsabilidade. Temos API http, que é responsável por lidar com a internet, possuímos a de arquivo, que é responsável por lidar com tudo que envolve arquivos, em seu projeto, entre outras.

Node é uma linguagem como qualquer outra, com base em javascript. Sabendo disso, nós podemos importar módulos, presentes nas APIs, de acordo com a necessidade do projeto.

Nós devemos utilizar o require, seguido do nome do módulo, como parâmetro. Podemos utilizar este recurso, tanto para módulos nativos do Node, quanto para bibliotecas que foram gerenciadas e instaladas pelo npm.

Falaremos mais sobre gerenciamento de arquivos, durante o conteúdo. Sobre como montar estruturas e carregar arquivos externos. O foco deste módulo é informar que existe uma palavra reservada chamada require, que tem a função de requerer, como o próprio nome diz, o arquivo ou módulo que estamos passando como argumento.

```javascript
var http = require('http');

function handle(request,response){
    response.end('Hello from http module');
}

var server = http.createServer(hangle);

server.listen(3000, function(){
    console.log('Server is listening as port 3000');
});
```

No código acima, nós importamos o módulo http para a variável http. Em seguida, criamos uma função chamada *handle, com dois parâmetros: um é a requisição, feita pelo usuário, e o outro é a resposta que o servidor retornará.

Neste caso, não estamos fazendo nenhuma lógica para que o servidor possa processar. Estamos, apenas, retornando uma mensagem e finalizando o acesso ao servidor, com o método end.

Logo depois, nós criamos um server, utilizando a função createServer e passamos a função handle, como parâmetro.
Depois, o atribuimos a uma variável chamada server. Em seguida, nós utilizamos o método listen, para habilitar a porta que o servidor receberá os dados de entrada. Passamos a porta 3000, que é o padrão utilizado. Vocês podem informar outra porta, só tomem cuidado para não utilizarem portas que o sistema operacional utiliza ou alguns programas, isso acarretrá conflitos.

Para acessarem este arquivo, no browser, e conseguirem ver o resultado dele, temos que rodar um comando no terminal, capaz de executar este arquivo. Somente depois da execução deste comando, teremos o nosso servidor rodando.

Comando: node app.js

Vejam o resultado quando acessamos o browser, no seguinte endereço: http://localhost:3000.

![http](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_server_hello.png?raw=true)

### Retornando um html como response

```
var http = require('http');

function handle(request,response){

    response.writeHead(200,{
       'Content-Type': 'text/html'
    });

    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head><title>Http Module</title></head>");
    response.write("<body>");
    response.write("<h1>Hello from http module SON</h1>");
    response.write("</body>");
    response.write("</html>");

    response.end();
}

var server = http.createServer(handle);

server.listen(3000, function(){
    console.log('Server is listening as port 3000');
});
```

Notem que alteramos a nossa função handle. Agora, ela não retorna, apenas, uma mensagem simples do tipo text/plain. Alteramos o Content-Type da response para text/html. Isso fará com que o browser interprete como um html e não mais como um texto simples.

Depois de alterarmos o content type, nós adicionamos uma estrutura básica de html, utilizando o método write e finalizamos a response, sem mensagem nenhuma. Não adicionamos mensagem, porque já inserimos conteúdo à ela.

Agora, basta irem ao terminal e rodarem o arquivo, novamente. Se não rodarem, não terão as alterações efetivadas:

```
node app.js

```

![node http](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_server_html.png?raw=true)

Observem como foi fácil gerar o html no browser, utilizando o módulo http do Node. Alteramos, apenas, o content type e depois adicionamos os elementos, com um método simples.

Através do html, surgiram todos os frameworks node.js voltados para web. Os criadores do node, tornaram o trabalho com http muito mais fácil, simples e dinâmico, para utilizarmos. A prova disso é que, nosso arquivo tem menos de 25 linhas e já fizemos um exemplo funcional.

[Voltar ao Índice](#indice)

---
## <a name="parte7">Como utilizar módulos </a>

Falaremos mais sobre módulos, para que não reste nenhuma dúvida sobre o assunto. Explicaremos como funciona a parte de modularização do código, quando forem utilizar a plataforma node.js.

Pode parecer que existam duas formas de trabalhar com modularização, mas, há apenas uma forma. Uma é um alias da outra.

Criem um arquivo chamado handle.js, na pasta raiz. Pegaremos a função handle, criada no módulo anterior, e passaremos para este arquivo. Em seguida, apagaremos ou comentaremos a função, no arquivo app.js, para não duplicarmos.

### Conteúdo arquivo handle.js

```javascript


function handle(request,response){

    response.writeHead(200,{
       'Content-Type': 'text/html'
    });

    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head><title>Http Module</title></head>");
    response.write("<body>");
    response.write("<h1>Hello from http module SON</h1>");
    response.write("</body>");
    response.write("</html>");

    response.end();
}
```

Para importarmos um módulo, vimos que basta chamarmos a palavra reservada require e passarmos o nome do módulo. Mostraremos como fazemos para exportar um código ou uma função.

Se tentarmos importar com o require, verão que não terão sucesso, porque o Node não reconhecerá como sendo um módulo. O que temos que fazer é, tornar o nosso arquivo handle.j um módulo para que possa ser carregado como tal.

### Exportando a função handle

```
module.exports = handle;
```

Desta forma, estamos exportando o nosso arquivo handle, para conseguirmos fazer a importação dele no nosso arquivo app.js. Vejam como ficou a importação do módulo handle.js.

```
var handle = require('./handle');
```

Agora, temos o mesmo efeito de antes, porém, estamos trabalhando com modularização. Assim, temos as responsabilidades separadas e um código mais limpo e organizado.

Passamos a ter dois módulos em nosso arquivo app.js:

1- O módulo http, que é nativo do Node
2- O módulo handle, que foi criado por nós

### Outra forma de exportar utilizando alias

Temos uma outra forma de exportar um módulo, que é um alias do primeiro modo de exportar.

Vejam código abaixo:

```
exports.fn = handle;
```

Para conseguirmos utilizar este segundo módulo, temos que trabalhar com objetos e, por isso, adicionamos .fn, porque estamos criando uma propriedade chamada fn, que terá a função como conteúdo. Desta forma, temos que alterar a maneira de chamar a função, também, no arquivo app.js. Vejam abaixo:

```
var server = http.createServer(hangle.fn);
```

Temos que acessar a propriedade fn do objeto handle, já que se trata de um objeto. Mas temos uma particularidade, como um modo é um alias do outro, o Node encara isso com uma escala de importância.

Se tentarem utilizar as duas formas de exportação de módulos, o Node dará preferência a primeira e anulará a segunda forma, porque se trata de um alias, apenas. Vejam os dois modos abaixo:

```
exports.fn = handle;
module.exports = handle;
```

Assim, o module.exports, será interpretado pelo node e o outro será descartado. Se alguma função estiver sendo acessada por objetos, vocês deverão trocar, novamente.

```
var server = http.createServer(hangle);
```

Vocês poderão escolher a forma que gostam de trabalhar. Lembrem-se que, caso utilizem as duas formas, a forma de alias será, sempre, descartada, não importanto a ordem ou quantas funções existirem.

Para resolver este problema, basta utilizarem a função padrão, que é o modo mais indicado. Vocês podem trabalhar com objetos, utilizando o modo padrão. Criem um arquivo chamado name.js e insiram o código abaixo:

```
//Modo 1
module.exports.name = function(){
    console.log('My name is Leonan');
}
//Modo 2
module.exports = {
    name: function (){
        console.log("Leonan");
    },
    lastname: function (){
        console.log("Luppi");
    },
}
```

Desta forma vocês podem importar o módulo, no app.js, da seguinte maneira:

```
//Modo 1
var name = require('./name');
name.name();
//Modo 2
name.name();
name.lastname();

```

Assim, estamos trabalhando da forma correta e não teremos problemas de conflitos.

### Conclusão
O mais importante é vocês entenderem que podemos criar quantos módulos quisermos, basta criarmos arquivos e exportá-los. Podemos exportar, desde arquivos simples, apenas com textos, até grandes arquivos, com muitas funções e regras de negócio. Basta trabalharem da maneira correta e organizada, com os exports e imports.

Criem mais alguns arquivos, exportem e depois façam a importação, para irem treinando e fixando este conceito.

[Voltar ao Índice](#indice)

---
## <a name="parte8">Trabalhando com arquivos</a>

Neste capítulo, ensinaremos como utilizar a classe de arquivos. Vocês aprenderão a manipular arquivos na aplicação, usando a API, nativa do Node.

É muito importante sabermos manipular arquivos, porque existem alguns módulos que necessitam da leitura do file system. Um exemplo que podemos citar é o Sequelize, um ORM que utiliza um banco de dados.

### Criando arquivos

Criaremos um arquivo chamado file.js e tentaremos simular alguns problemas, para resolvê-los, em seguida. Assim, facilitará o entendimento.

Suponham que precisemos escrever dentro de um arquivo. Escreveremos qualquer tipo de string dentro de um arquivo, utilizando o file system. Vejam o código abaixo:
```javascript
var fs = require('fs');

fs
    .writeFile('data.txt' , 'Hello world from SON' , function (err) {
        if(err){
            throw err;
        }
    });
```

Notem que, primeiro importamos a classe File System e atribuímos a variável fs. Em seguida, utilizamos o método writeFile, com os seguintes parâmetros:

1- Nome do arquivo  
2- Conteúdo do arquivo  
3- Função que recebe um erro como parâmetro  

Após, fizemos uma verificação. Se existir erro, a função mostrará, se não houver erro, segue o fluxo da programação.

Vale lembrar que, todas as API são assíncronas, mas, existem métodos que são síncronos. Vocês podem escolher, de acordo com a necessidade do momento.

### Lendo arquivos

Depois de termos criado um arquivo com um conteúdo, precisamos ler este arquivo. É o que mostraremos a seguir.

```javascript
var fs = require('fs');

fs
    .readFile('data.txt', function (err,data) {
        if(err){
            throw err;
        }
        console.log(data.toString('utf8'));
    });
```

A leitura de um arquivo é muito semelhante à criação. Observem que, apenas alteramos o método para readFile e depois passamos dois parâmetros:

1- Caminho do arquivo em sua estrutura de pastas  
2- Função que recebe um erro(err) e o conteúdo do arquivo que foi lido(data)  

Em seguida, fizemos a mesma verificação do erro. Caso não tenha o erro, imprimimos o conteúdo como string, na codificação utf8.

Como nosso arquivo criado está na mesma pasta do nosso arquivo file.js, não precisamos colocar o caminho relativo. Saibam que, se tiverem uma estrutura de pastas mais complexa, vocês deverão passar o endereço completo do arquivo, para que a leitura possa ser concluída.

### Lendo arquivos de um diretório
```javascript
.readdir('.', function (err,files) {
    if(err){
        throw err;
    }

    for (var file in files){
        console.log(files[file]);
    }
});
```

Com o método readdir, conseguimos ler todos os arquivos que estiverem dentro do diretório. Basta passarmos o caminho do diretório, no primeiro parâmetro, e depois, uma função que recebe err e files, assim como as anteriores.

Em seguida, percorremos o resultado com uma estrutura de repetição for e, obteremos todos os arquivos e pastas, que se encontram dentro do nosso diretório raiz.

### Filtrando resultados

```javascript
.readdirSync('.')
.filter(function (file) {
    return (file.endsWith('.js'));
})
.forEach(function (file) {
    console.log(file);
});
```

Percebam que utilizamos o mesmo método, porém de forma síncrona e filtramos, somente, os arquivos terminados em .js. Desta forma, trabalhamos com filtros e lemos, somente, os arquivos filtrados.

Observem que não existe segredo ao trabalhar com arquivos no Node.

[Voltar ao Índice](#indice)

---
## <a name="parte9">Trabalhando com evento emitter</a>

[Voltar ao Índice](#indice)

---
## <a name="parte10">Adicionar pacotes externos</a>

[Voltar ao Índice](#indice)

---
## <a name="parte11">Remover e atualizar pacotes externos</a>

[Voltar ao Índice](#indice)

---
## <a name="parte12">Publicar um pacote no npm</a>

[Voltar ao Índice](#indice)

---
## <a name="parte13">Trabalhando com Websockets</a>

[Voltar ao Índice](#indice)

---
## <a name="parte14">Principais frameworks</a>

[Voltar ao Índice](#indice)

---
## <a name="parte15">Iniciando com Express.js</a>

[Voltar ao Índice](#indice)

---
## <a name="parte16">Finalizando</a>

[Voltar ao Índice](#indice)

---