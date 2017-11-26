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

[Voltar ao Índice](#indice)

---
## <a name="parte6">Trabalhando com http </a>

[Voltar ao Índice](#indice)

---
## <a name="parte7">Como utilizar módulos </a>

[Voltar ao Índice](#indice)

---
## <a name="parte8">Trabalhando com arquivos</a>

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