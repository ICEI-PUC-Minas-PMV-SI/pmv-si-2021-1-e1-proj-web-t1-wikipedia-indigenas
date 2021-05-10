# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

1 - José Maxakali: 36 anos, morador da TI Maxakali em Santa Helena de Minas, possui uma esposa; além das funções comunitárias da tribo, José também produz desenhos que ilustram o dia-a-dia dele e da aldeia. 

José busca na ‘wiki indígena’ um espaço para divulgar suas gravuras e, principalmente, se articular com indígenas de outras tribos, especialmente do norte do país, que são mais organizadas politicamente, para melhor ‘lutar’ contra fazendeiros que frequentemente ameaçam a terra já demarcada;

2 - Juliana Domingues: 28 anos, mora em SP, é arquiteta e está fazendo seu mestrado em sociologia com enfoque em comunidades indígenas. 

Juliana usa a ‘wiki indígena’ para ter contato direto com indígenas de diversas tribos do país a fim de poder conhecer, estudar e aprender mais sobre alguns desses povos. À partir deste contato, Juliana espera concluir seu mestrado e participar de iniciativas nas comunidades indígenas que contribuem com a manutenção das TIs, da cultura e do bem estar dos povos;

3 - Anderson Menezes: 15 anos, mora em Tiradentes, tem curiosidade sobre os povos indígenas e busca se conectar com indígenas da sua idade;

Anderson percebeu o quão pouco sabe sobre estes povos e decidiu buscar a fundo informações sobre eles, não apenas em sites informativos distantes da realidade das aldeias, mas através da ‘wiki indígena’, onde se conectou com indivíduos de tribos de várias regiões do país.

## Histórias de Usuários

Eu como indígena :

- Como indígena, quero divulgar meu trabalho para que qualquer pessoa possa encontrar.
- Como indígena, quero relatar ameaças que minha comunidade vem recebendo por parte de fazendeiros.
- Como indígena, quero encontrar relatos de ocorrências em outras comunidades para poder entrar em contato com essas comunidades.


Eu como pesquisadora :

- Gostaria de colher informações culturais confiáveis das tribos indígenas que pretendo estudar.
- Gostaria de poder pesquisar a respeito de ameaças que as tibos possam estar sofrendo.
- Gostaria de me relacionar diretamente com tribos que estão longe de mim.
- Gostaria de me inteirar da vida cotidiana das tribos em que fazer isso pessoalmente seja muito complicado.


Eu como um cidadão :

- Gostaria de encontrar pessoas que compartilham hábitos, valores culturais, estilos musicais e ideologias políticas igual a minha.
- Gostaria de visualizar o perfil de pessoas de outras tribos.
- Gostaria de me conectar com indígenas da minha idade, trocar informações e fazer amigos.
- Gostaria de conhecer a histórias de outras tribos.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-004| Permitir que o usuário encontre páginas de comunidades | ALTA |
|RF-010| Permitir que o usuário encontre dados sobre terras indígenas por região do brasil | ALTA |
|RF-011| Permitir que o usuário encontre etnias por matriz linguística | ALTA |
|RF-001| Permitir que um membro de comunidade cadastre seu trabalho | MÉDIA | 
|RF-002| Permitir que o usuário registre ameaças à sua comunidade   | MÉDIA |
|RF-003| Inserção/edição de texto e documentos em página dedicada a cada tribo  | MÉDIA |
|RF-007| Inclusão de dados para criação de perfil | MÉDIA |
|RF-008| Listar ocorrências registradas por comunidades | MÉDIA |
|RF-006| Feed com atualizações dos usuários indígenas cadastrados | BAIXA |
|RF-005| Troca de mensagens entre usuários indígenas e outros | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Conexão de internet de no mínimo 10MB | ALTA |
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-003| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.
