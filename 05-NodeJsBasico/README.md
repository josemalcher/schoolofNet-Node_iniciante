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

Neste capítulo falaremos sobre event emitter. Mostraremos como este recurso ajuda o Node a ter uma boa velocidade de processamento. Utilizaremos o arquivo app.js, para os exemplos.

Com o evento, o Node cria determinadas funções que, logo após serem criadas, ficam aguardando um evento, pré-programado, acontecer. A partir do momento que o evento acontece, a função é chamada, imediatamente.

O Node possui uma classe chamada event emitter que trata destes eventos. Ensinaremos como utilizá-la.

```javascript
var events = require('events');
var emiter = new events.EventEmitter();

emiter.on('say' , say);

function say(){
    console.log('Im saying...');
}
```

Reparem que importamos a classe events, para a variável events. Em seguida, criamos uma variável chamada emiter e atribuímos o método EventEmitter a ela.

Logo após, preparamos o evento say, que chamará a função say, assim que acionado. Observem que, deixamos o evento programado, conforme falamos anteriormente, mas a função não foi acionada, apenas foi carregada e está aguardando o disparo.

Para termos certeza de que a função está criada, rodaremos um console.log e subiremos o servidor, novamente, com o comando abaixo:

```javascript
var events = require('events');
var emiter = new events.EventEmitter();

emiter.on('say' , say);

function say(){
    console.log('Im saying...');
}

console.log(say);
```

```
node app.js
```

Vejam o resultado abaixo:

![EventEmitter](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_event_emitter.png?raw=true)

De acordo com a imagem acima, podemos ter certeza de que a função foi criada e está apenas aguardando o disparo, para executar. Vamos chamá-la.

```
// Chamando função direta
say();
// Chamando função via evento
emiter.emit('say');
```

Em nosso exemplo, o evento tem o mesmo nome da função, mas não precisa ter o mesmo nome, vocês podem registrar o evento com o nome que quiserem.

Este, foi um exemplo com eventos criados por nós. Existem eventos nativos, do próprio Node. Aproveitaremos que estamos utilizando o servidor como exemplo e utilizaremos a função handle, para exemplificar. Acessem o arquivo handle e adicionem o código abaixo:
```javascript


var querystring = require('querystring');
function handle(request,response){
    response.writeHead(200,{
        'Content-Type': 'text/html'
    });

    var body = '';
    request.on('data',function (data) {
        body += data.toString();
    });

    request.on('end', function () {
        var decode = querystring.parse(body);

        console.log(decode);
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

module.exports = handle;
```

Primeiro, nós importamos a querystring, em seguida, criamos uma variável body, inicialmente vazia. Logo depois, preparamos o evento data, que pega os valores da requisição e joga na variável body.

Depois de ter capturado os valores para variável body, o evento end pega a querystring, dá um parse na variável body e decodifica.

O importante é entenderem que estes eventos já são executados durante o ciclo de vida do servidor que criamos. Logo, teremos o resultado, automaticamente. Não precisaremos disparar estes eventos. Vejam, na imagem abaixo, o resultado que teremos após enviar uma request para o servidor. Utilizamos o postman, para enviar a requisição.

![node_event_postman](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_event_postman.png?raw=true)

Nós, somente, enviamos uma requisição, que já foi capturada pelos eventos e a decodificou para o formato json.

Este é um exemplo de como trabalhar com programação orientada a eventos. Chegamos próximo ao que os frameworks executam para fazer o decode para json, por exemplo.

Façam testes e leiam com calma. Este assunto não é tão simples, mas lendo com calma e analisando os procedimentos, temos certeza que irão entender e adorar este recurso que o Node disponibiliza.

[Voltar ao Índice](#indice)

---
## <a name="parte10">Adicionar pacotes externos</a>

Ensinaremos trabalhar com pacotes externos, que é uma tarefa muito simples. O npm já faz esta tarefa pra nós.

Vocês aprenderão a pesquisar e adicionar algo que seja externo, em seu projeto. Basta entrar no site https://www.npmjs.com/ e pesquisar o pacote que desejar.

Para exemplificar, pesquisaremos por um pacote chamado Hello World, que é responsável por dar um console log em nosso projeto.

![Adicionar pacotes externos](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_npm_search.png?raw=true)

Na imagem vocês podem ver o resultado da busca e a página interna do pacote, onde mostra o comando para instalação. Rodaremos o comando abaixo:

npm install console-log-hello-world

Com o comando, acima, teremos o pacote instalado, porém, se olharem o arquivo package.json, não haverá nenhuma informação sobre o projeto possuir este pacote ou que ele dependa deste pacote.

Para resolvermos este problema, basta adicionarmos um parâmetro, ao comando de instalação. Rode o comando, abaixo, novamente:

```javascript
npm install console-log-hello-world --save
```

Desta forma, será adicionada a dependência no arquivo package.json e, quando rodarem o projeto, em outro local, basta rodar o comando:

```
npm install
```

Todas as dependências que estiverem relacionadas, serão instaladas, automaticamente, pelo npm. Esta é a vantagem de utilizarmos o gerenciador. Prestem atenção quando forem instalar algum pacote. Decidam se ele faz parte, apenas, do desenvolvimento ou, se ele faz parte do projeto geral, pois existem dois parâmetros a serem adicionados como dependência: desenvolvimento e produção.

Parâmetro  |	Tipo  |	Descrição
----- | ----- | ----- 
--save	| Produção	| Pertence ao ambiente de produção e ao ambiente de desenvolvimento
--save-dev |	Desenvolvimento  | Pertence somente ao ambiente de desenvolvimento

Depois que o pacote é instalado, observem que é criada uma pasta chamada node_modules, onde estarão instaladas todas as dependências do projeto.

###Importando pacote externo
```
require('console-log-hello-world');
```
Como é um pacote externo, utilizamos somente o require, seguido do nome da pasta, criada dentro da pasta node_modules. Vocês podem verificar a chamada, na imagem acima, ou, se utilizarem uma IDE, ela ajudará com o auto complete.

Depois de, instalado e importado em nosso arquivo app.js, rodaremos o arquivo no terminal.

```
node app.js
```

Observem que teremos o Hello World sendo impresso. Significa que a biblioteca está funcionando.

### Conclusão

Não deixem de verificar o arquivo package.json para checarem as dependências que foram adicionadas. Desta forma, vocês entenderão o funcionamento do npm.

Para treinarem, seria interessante fazerem a instalação de mais um pacote e não esqueçam de adicionar como dependência do projeto ou de produção.

[Voltar ao Índice](#indice)

---
## <a name="parte11">Remover e atualizar pacotes externos</a>

Mostraremos como atualizar ou remover pacotes que já não são mais úteis, em nossos projetos.

Como todos sabem, durante um projeto de software, nunca sabemos exatamente quais pacotes utilizaremos. Sempre, há muitas adições e remoções, até chegarmos a um projeto final.

### Removendo um pacote

Para removermos um pacote, o npm disponibiliza uma função tão simples, quanto a de instalação:

```
npm uninstall console-log-hello-world --save-dev
```

```
npm uninstall console-log-hello-world --save
```

Utilizando os comandos, acima, vocês desvinculam tanto do arquivo package.json, quanto da pasta node_modules. Esta é a remoção completa do pacote. Algumas pessoas removem apenas do arquivo package.json, manualmente, e acham que está desinstalando o pacote, mas se enganam, porque a pasta node_modules, ainda está presente.

Observem que, da mesma forma que adicionamos as dependências na instalação, devemos adicionar os parâmetros para que as dependências sejam removidas do arquivo package.json.

### Atualização de pacotes

Do mesmo jeito que precisamos remover pacotes durante o desenvolvimento, pode haver a necessidade de uma atualização de pacote, devido a algum conflito, por questões de segurança ou para manter o pacote atualizado.

Existem duas formas de fazermos esta atualização:

1- Rodando o comando de instalação novamente  
    1.2- NPM INSTALL CONSOLE-LOG-HELLO-WORLD  
2- Rodando o comando de update  
    2.1- NPM UPDATE CONSOLE-LOG-HELLO-WORLD  

O conceito dos parâmetros para adicionarmos as dependências ao arquivo package.json, valem, também, para o comando de update.

[Voltar ao Índice](#indice)

---
## <a name="parte12">Publicar um pacote no npm</a>

Ensinaremos a publicar um pacote no repositório oficial do site npmjs.com. Da mesma forma que conseguimos baixar, também, podemos subir pacotes próprios.

Assim como vocês já podem ter usado um pacote que alguém disponibilizou, vocês podem ajudar alguém, publicando um pacote que seja útil para a comunidade.

### Primeiro passo

Criem uma conta dentro do site. Acessem sign up e façam o cadastro, lembrando que o username será o nome de registro no site e será o nome que aparecerá em todos os seus pacotes enviados.

Depois de preencherem todos os dados e aceitarem os termos e condições de uso, vocês poderão enviar seus pacotes para o repositório.

### Segundo passo

É necessário saber que o pacote deve, obrigatoriamente, conter o arquivo package.json na pasta raiz, com as principais informações, que são: nome, versão, main, scripts, keywords, autor, licença e dependências. Caso queiram colocar outras informações, é possível, mas, as citadas, são obrigatórias.

Depois de criado o pacote com o arquivo package.json, vocês rodarão os seguintes comandos:

```
npm adduser
```

Em seguida, colocarão usuário, senha e email. Desta forma, estarão logados no site.

Depois de logados no site, via terminal, vocês acessarão a pasta do pacote e rodarão o comando de publicação:

```
npm publish
```

O comando subirá o projeto para o repositório, onde poderá ser encontrado, posteriormente.

A cada atualização do pacote, vocês deverão informar a nova versão, para que o site faça este controle.

Após este processo, o pacote estará pronto para ser encontrado no search, por todos usuários que pesquisarem pelas keywords que configuramos. Bastará fazer a instalação e utilizar nos projetos.

[Voltar ao Índice](#indice)

---
## <a name="parte13">Trabalhando com Websockets</a>

Ensinaremos como trabalhar com Websockets.

Todos sabem que o node é famoso por ter um suporte muito bom a Websockets. Por este motivo, é tão comum encontrarmos, na internet, materiais falando de websockets, com exemplos de chats, ou qualquer aplicação que exija tempo real.

Websockets é uma forma, muito interessante, de mantermos uma aplicação de ponta a ponta, onde seja necessária a execução em tempo real, sem a necessidade de refresh.

O primeiro passo será a instalação do pacote chamado websocket.

```
npm install websocket --save
```

Após a instalação, criaremos um novo arquivo chamado socket.js. Neste arquivo configuraremos nossos eventos, da mesma forma que trabalhamos com event emitter.

```
var ws = require('websocket').server;
var http = require('http');

var socket = new ws({
   httpServer: http.createServer().listen(3000)
});

socket.on('request' , function (req) {
    var conn = req.accept(null, req.origin);
    console.log('Origin -> ', req.origin);

    conn.on('message', function (message) {
        conn.sendUTF('Hello from server');
    })

    conn.on('close', function () {
        console.log('Connection is closed');
    })
});
```

Primeiro, importamos o webpack que instalamos. Em seguida, importamos a classe http e, somente depois, criamos uma instância do websocket, passando como propriedade httpServer. Um server que criamos através da classe http.

O próximo passo é definirmos 3 eventos para serem disparados:

1- O primeiro evento é disparado quando uma requisição é feita e o evento é responsável por pegar os dados de origem do usuário que está acessando.  
2- O segundo evento irá responder, com uma mensagem, quando o client enviar uma mensagem.  
3- O terceiro evento enviará uma mensagem, quando a conexão for fechada.  

Se rodarem o arquivo socket.js, no terminal, vocês não terão resultado no browser, porque ainda não estamos fazendo nenhuma requisição

Para isso, criaremos um arquivo chamado socket.html, onde teremos o conteúdo abaixo:

```javascript
<script type="text/javascript">
    var socket = new WebSocket('ws://localhost:3000');

    socket.onopen = function () {
        socket.send('Im open from client');
    };

    socket.onmessage = function (message) {
        console.log(message);
    }

    socket.onerror = function (err) {
        console.log('Erro ->' , err);
    }
</script>
```
No arquivo html, criamos um script onde instanciamos uma variável do websocket, passando o endereço de nosso server.

Como o browser já tem suporte ao HTML 5, nós temos suporte ao websocket, nativamente. Portanto, logo que abrirem a página, já terão disparado um evento ao servidor, que retornará um objeto. Vejam na imagem abaixo:

![node_ws_message](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_ws_message.png?raw=true)

Se quisermos mostrar só a mensagem do servidor e não o objeto completo, bastam acessar a propriedade data do objeto.

```
    socket.onmessage = function (message) {
        console.log(message.data);
    }
```

Se olharmos no terminal, veremos os seguintes dados.

![node_ws_server](https://github.com/josemalcher/schoolofNet-Node_iniciante/blob/master/05-NodeJsBasico/git-img/node_ws_server.png?raw=true)

Podemos ver que a origem do acesso é file e conseguimos ver, também, a mensagem de encerramento da conexão, que configuramos no arquivo socket.js.

### Conclusão

Apesar de ser um conceito um pouco mais complexo, vocês podem observar que trabalhar com websocket não é tão difícil. Com pouco código, conseguimos fazer uma interação com websocket, conectando client e server, em tempo real.

Leiam com atenção este conteúdo, refaçam quantas vezes forem necessárias, para fixarem o conceito. Pesquisem um pouco mais sobre o assunto, para aprofundarem os conhecimentos.

[Voltar ao Índice](#indice)

---
## <a name="parte14">Principais frameworks</a>

Apresentaremos os principais frameworks que existem para Node.js, atualmente.

### Express

Sem dúvida, este é o framework mais utilizado no mercado. Com ele vocês conseguem fazer tudo muito facilmente. Ele encapsula tudo que vocês precisam, de uma maneira muito mais fácil. Utiliza funções programadas, o que proporciona uma produtividade muito maior, em vez de programar, manualmente.

O principal diferencial do express é que ele já é muito conhecido e por ser conhecido existem muitas implementações que tendem a melhorá-lo. Além disso, ele tem a documentação traduzida em vários idiomas, inclusive, uma parte em português.

Além de todas estas vantagens, ele disponibiliza um gerador que é capaz de executar um projeto simples. Nós não aconselhamos a utilização deste boilerplate, quando forem utilizar um projeto em produção, porque o projeto criado é muito generalista, onde vocês não têm uma separação de módulos. Ele pode ser muito bom para aprendizagem, mas para um projeto real, não é aconselhável.

### Sails

Quem veio do rails, se identificará com este framework, onde o foco é a produtividade. Com este framework, vocês conseguem fazer um CRUD, em segundos. Ele tem uma feature, chamada blueprints, que permite vocês fazerem CRUDs, diretamente, na url. O que torna o trabalho muito mais dinâmico.

Além disso, ele já disponibiliza um boilerplate, pronto para produção, ou seja, vocês têm tudo que é necessário para rodarem o projeto, desde o início até a produção. Vocês têm suporte a email, ORM e várias outras implementações de bibliotecas próprias, o que faz com que o framework se torne muito mais produtivo, que os outros.

A principal característica é a ORM própria, que permite fazer a comunicação entre banco relacional e não relacional, ao mesmo tempo. Isso significa que vocês podem ter duas conexões conversando entre si.

Disponibiliza blueprints e boilerplate viáveis, para produção, onde já vem com email, autenticações via polices e vários suportes ao plugin, além de já vir com websockets integrado. Caso queiram utilizar websockets para o projeto, o sails é uma ótima dica.

Referente à documentação, ela está bem amparada, embora exista somente em inglês, ela é muito organizada e completa.

### Hapi

O hapi vem crescendo muito nos últimos tempos, porque vocês conseguem fazer uma aplicação de forma a reutilizar partes do seu código, muito facilmente. Além disso, vocês podem escrever uma aplicação, muito simples e muito performática, sem contar que o projeto sempre será muito mais enxuto que os demais, pelo fato de ser um framework muito pequeno.

Além destas características, a parte de documentação e tutoriais são excelentes. Conta, também, com uma lista de plugins próprios, para ajudar, cada vez mais, o desenvolvedor. Possui um grande ecossistema, voltado, especificamente, para o hapi.

A comunidade ainda é pequena, em comparação às outras, mas vem ganhando seu espaço.

### Conclusão

Estas três opções de framework são muito utilizadas, atualmente. Podemos dizer que cerca de 80 a 85% dos projetos são desenvolvidos com uma destas 3 plataformas. Portanto, vale a pena o estudo de cada uma delas. Depois, basta ver qual se adapta melhor ao projeto e fazer a escolha.

[Voltar ao Índice](#indice)

---
## <a name="parte15">Iniciando com Express.js</a>

[Voltar ao Índice](#indice)

---
## <a name="parte16">Finalizando</a>

[Voltar ao Índice](#indice)

---