# Informações do Projeto
`TÍTULO DO PROJETO`  

......  iGame ......

`CURSO` 

......  Ciência da Computação ......

## Participantes

......  
- Arthur Justino Dias
- Bernardo Matosinhos de Andrade Peixotos
- Giovanni Purri Vecchio
- Lucca Costa Val Camarano
- Luccas Feres de Carvalho
- Rafael Lana Mascarenhas Diegues ......

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

......  Nos dias de hoje, cada vez mais, as pessoas se interessam por diversos tipos de games, que variam entre diversas áreas e maneiras de se jogar.
Devido a esse fato e também as constantes atualizações de jogabilidade e maneiras para raciocinar em missões que decidimos então criar uma plataforma que
irá ajudar e auxiliar os gamers a aprender como jogar alguns jogos, compartilhar tutoriais entre si, como passar de certas missões, e tambem a aprender a
história de alguns deles, iremos comentar e recomendar diversos produtos que estão sendo jogados e que também podem crescer. ......


## Objetivos

......  Nos temos como objetivo tornar esse projeto em um portal de games nacional onde gamers de todos os estilos de jogo, todas as idades e todos os
gêneros consigam compartilhar e receber conhecimento sobre o mundo dos videogames. Nos vamos utilizar  mecanismos muito bem conhecidos de divulgação no 
mesmo estilo de outros gigantes sites de informação como Skillshare e YouTube. ......


## Justificativa

......  Neste projeto buscamos resolver um problema recente que, em nossa visão, tem um potencial muito grande para se tornar um grande negócio no
futuro próximo. O problema em questão é a dificuldade ou até mesmo a falta de paciência dos nossos clientes alvos de aprender a jogar vídeo games. Não é 
novidade que o mercado de vídeo games que surgiu nem a 40 anos atrás é um dos mercados que mais cresce no mundo anualmente, e com isso em mente pensamos
qual seriam as maiores dificuldades das pessoas que estão entrando nesse mundo agora. 
           Os jogos de antigamente eram consideravelmente intuitivos, com mecânicas simples e diretas, mas com o passar dos anos vão surgindo cada vez mais 
jogos que desafiam até os jogadores mais árduos. Nosso projeto servirá tanto para novos jogadores que desejam se aprofundar no mundo dos games quanto para os
jogadores ‘hardcore’ que desejam passar os maiores apertos dentro dos videogames. ......


## Público-Alvo

......  Nosso público alvo são aqueles que desejam melhorar sua habilidades e conhecimentos em algum jogo, seja um iniciante ou profissional. Teremos diversas
categorias de jogos em nosso site para assim podermos atingir o maior número de usuários possível, desde jogos de estratégia até MMO's. 
        Estamos procurando pessoas que já estão familiarizadas com o mundo dos videogames, seja a partir de notícias na televisão, de uma infancia repleta de 
videogames, de um irmão mais velho que joga ou até mesmo pessoas com curiosidade em desbravar o mundo dos games. ......


# Especificações do Projeto

......  Estamos criando um site imersivo e responsível onde os gamers se sintam a vontade de compartilhar o que sabem e procurar descobrirem coisas novas. Esse
ambiente será criado a partir da integração de usuários dentro do site, assim você poderá se comunicar com outros gamers. ......


## Personas e Mapas de Empatia

......  As personas nos ajudaram a mapear quias são os tipos de clientes que nós iremos buscar. Com essa informação em mente já podemos ocmeçar a mudar o nosso site
para se encaixar mais com as visões das personas. ......

<table>
<thead>
<tr class="header">
<th><img src="images/vall.png" style="width:1.9375in;height:2.58333in" /></th>
<th><strong>Gabriel Vall Rocha</strong></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><p><strong>Idade</strong>: 21</p>
<p><strong>Ocupação</strong>: Gabriel é um cara tímido, curioso e muito estudioso. Um pouco antissocial. Prefere fazer coisas incomuns para jovens de sua idade.</p></td>
<td><p>Aplicativos:</p>
<ul>
<li><blockquote>
<p>Instagram.</p>
</blockquote></li>
<li><blockquote>
<p>TikTok.</p>
</blockquote></li>
<li><blockquote>
<p>Twitter.</p>
</blockquote></li>
<li><blockquote>
<p>SnapChat.</p>
</blockquote></li>
</ul></td>
</tr>
<tr class="even">
<td><p>Motivações</p>
<ul>
<li><blockquote>
<p>Construir uma carreira no ramo de computação.-</p>
</blockquote></li>
<li><blockquote>
<p>Ter tempo para praticar seus hobbies.</p>
</blockquote></li>
<li><blockquote>
<p>Ficar cada vez melhor nos seus jogos favoritos.</p>
</blockquote></li>
</ul></td>
<td><p>Frustrações</p>
<ul>
<li><blockquote>
<p>Faculdade muito puxada</p>
</blockquote></li>
<li><blockquote>
<p>Achar tempo para jogar.</p>
</blockquote></li>
<li><blockquote>
<p>Medo de aos poucos parar de jogar videogame devido aos estudos.</p>
</blockquote></li>
<li><blockquote>
<p>Gastar muito tempo jogando e ir mal na faculdade.</p>
</blockquote></li>
</ul></td>
<td><p>Hobbies, História</p>
<ul>
<li><blockquote>
<p>Jogar futebol.</p>
</blockquote></li>
<li><blockquote>
<p>Jogar videogames.</p>
</blockquote></li>
</ul></td>
</tr>
</tbody>
</table>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário             | Registrar meus jogos jogados       | Conseguir achar aulas mais rápido      |
|Usuário             | Poder mandar mensgaens             | Comunicar com outros usuários          |
|Usuário             | Ter acesso rápido as aulas         | Economizar tempo                       |
|Usuário             | Ser fácil de usar                  | Clientes não saírem do site            |
|Usuário             | Ser estéticamente agradável        | Ser apelativo para todos               |
|Adminsitrador       | Conseguir alterar os jogos         | Para ter novos jogos semanalmente      |
|Administrador       | Conseguir alterar configuraçoes de chats | Para regular os chats particulares|


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário se cadastre  | ALTA | 
|RF-002| Poder mandar mensagens   | ALTA | 
|RF-003| Permitir que os usuários tenham acesso ao conteúdo publicado   | ALTA |
|RF-004| Permitir que os usuários interajam um com os outros   | MÉDIA |
|RF-005| Ser fácil de usar   | MÉDIA |
|RF-006| Permitir que os usuários comentem no conteúdo   | BAIXA | 
|RF-007| Ser esteticamente agradável   | BAIXA | 
|RF-008| Ter acesso rápido as aulas   | BAIXA |


### Requisitos não Funcionais

| ID      | Descrição do Requisito                                                                                        |   Prioridade   |
| ------- | ------------------------------------------------------------------------------------------------------------- | -------------- |
| RNF-01  | O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  | ALTA           |
| RNF-02  | O site deverá ser responsivo permitindo a visualização em um celular de forma adequada.                       | ALTA           |
| RNF-03  | O site deve ter bom nível de contraste entre os elementos da tela em conformidade.                            | MÉDIA          |
| RNF-04  | O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). | ALTA           |
| RNF-05  | O site deve ter uma estética boa, a fim de atrair usuários.                                                   | ALTA           |
| RNF-06  | O site deve ser uma experiência divertida para os usuários.                                                   | MÉDIA          |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|  ID    | Restrição                                                                   |
| ------ | --------------------------------------------------------------------------- |
| RE-01  | O projeto deverá ser entregue no final do semestre letivo. |
| RE-02  | O aplicativo deve se restringir às tecnologias básicas da Web no Frontend. |
| RE-03  | A equipe não pode subcontratar o desenvolvimento do trabalho.  |
| RE-04  | Falta de recursos financeiros para aprimorar recompensas. |                                

# Projeto de Interface

......  A interface do site será feita de uma maneira prática e facil de ser entendida por qualuqer um, visto que nos buscamos alcançar clientes
de todas as idades, inclusive crianças. A seguir estarão as três mecânicas mais importantes da nossa interface

<img src="images/Home.PNG" style="width:1.9375in;height:1.94444in" />

...... A home será onde o usuário terá acesso rápido às principais mecânicas do site, sendo o nosso hub geral de informações. .......

<img src="images/aulasevideos.PNG"  style="width:1.9375in;height:1.94444in" />

...... Essa página será o centro de todas as videoaulas e aulas do site, todas as informações sobre jogas, jogadores, etc. serão passadas por essa página. ......

<img src="images/Chats.PNG" style="width:1.9375in;height:1.94444in" />

...... Essa página será responsável pela comunicação geral do site, seja entre os clinetes e os desenvolvedores, ou entre os próprios clientes. ......


## User Flow

......  <img src="images/userflow.PNG" style="width:1.9375in;height:1.94444in" />
 ......

## Wireframes

......

<img src="images/signup.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Sign up: Nesta tela o usuário fara seu cadastro, caso ele já seja cadastrado basta clicar em “Já tenho conta”. 


.
<img src="images/signin.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Sign in: Nessa tela usuários já cadastrados irão logar em suas contas. 


.
<img src="images/Assinaturas.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Assinaturas: Nessa tela você poderá escolher o plano que utilizará.  


.
<img src="images/Home.PNG"  style="width:1.9375in;height:1.94444in" />
Tela Home: A home será onde o usuário terá acesso rápido às principais mecânicas do site, sendo o nosso hub geral de informações. 


.
<img src="images/Jogos.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Jogos: A tela de jogos será responsável por apresentar aos consumidores todos os jogos que o site terá em seu banco de dados de uma maneira prática e inteligente. 


.
<img src="images/aulasevideos.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Aulas e Vídeos: Essa página será o centro de todas as videoaulas e aulas do site, todas as informações sobre jogas, jogadores, etc. serão passadas por essa página. 


.
<img src="images/Chats.PNG"  style="width:1.9375in;height:1.94444in" />
Telas de Chats: Essa página será responsável pela comunicação geral do site, seja entre os clinetes e os desenvolvedores, ou entre os próprios clientes.


.
<img src="images/Sobre.PNG"  style="width:1.9375in;height:1.94444in" />
Tela Sobre: Nesta tela iremos contar quem nós somos, de onde viemos e qual é nosso objetivo com o site. 


.
<img src="images/Perfil.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Perfil do Usuário: Essa tela será responsável por mostrar os principais dados do usuário, além de outras informações que ele achar cabível (será personalizável nas configurações). 


.
<img src="images/Buscar.PNG"  style="width:1.9375in;height:1.94444in" />
Tela de Buscar: Essa tela será responsável de facilitar a utilização do site permitindo o usuário pesquisar por palavra chave para encontrar qualquer conteúdo, jogo ou aula dentro da plataforma. 
......

# Metodologia

......  Nossa metodologia foi o Scrum Framework e o Design Thinking, onde desenvolvemos as informações nescessárias para começarmos a
construir o projeto. Criamos personas e mapas de stakeholders, além de criar uma matriz csd para entendermos o que conehciamos do nosso próprio produto.
        Durante esse processo a maioria dos participantes do grupo tiveram debates para decidir qual seria o rumo que tomariamos com o projeto. Decidimos seu nome, qual seria sua finalidade, quais seriam suas principais mecânicas, quais seriam os dispositivos que o site funcionaria, entre diversos outros temas. Este documento
apresenta diversas das decisões que tomamos já concretizadas.  ......

## Divisão de Papéis

......  A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base
para definição do processo de desenvolvimento.

O quadro kanban foi feito no Trello (link:https://trello.com/b/aWMYKPcc/tiaw-ag):
<img src="images/trello.PNG"  style="width:1.9375in;height:1.94444in" />
<img src="images/legenda_trello.PNG" style="width:1.9375in;height:2.58333in" />

A equipe está organizada da seguinte maneira:

  - > Scrum Master: Rommel Carneiro 

  - > Product Owner: Rafael Lana Mascarenhas Diegues

  - > Equipe de Desenvolvimento
    
      - > Luccas Feres de Carvalho (Desenvolvedor Front End)
    
      - > Lucca Costa Vall Camarano (Desenvolvedor Front End)
    
      - > Bernardo Matosinhos de Andrade Peixoto (Desenvolvedor Front End)
    
      - > Arthur Justino Dias (Desenvolvedor Back End)
       
      - > Giovanni Purri Vecchio (Desenvolvedor Back End)
......

## Ferramentas

......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinking | Miro |  https://miro.com/welcomeonboard/SFlMVnVhV1U2SXFYQndlWmRBdjR3ZGlEUnZJcUp3b0Y1MDZKVU90ektBeG55RGlUR2lBQUxSdXg4d255SE1tOXwzNDU4NzY0NTIyNDg2NTQ0NTkwfDI=?share_link_id=954359008594 | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20222-aprender-games.git  |
|Hospedagem do site | Heroku |  Ainda não temos site publicado | 
|Protótipo Interativo | MavelApp | https://marvelapp.com/prototype/b65i7bj | 
......

## Controle de Versão

......  Nos utilizamos as strings e mains do Git e GitHub para o controle da versão e de todos os outros aspectos do trabalho, incluindo documentação, apresentação, relatório e concepção.  ......

> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
