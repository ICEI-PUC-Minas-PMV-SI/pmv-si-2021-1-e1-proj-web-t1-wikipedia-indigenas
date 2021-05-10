
# Metodologia


Para cada nova funcionalidade a ser desenvolvida, é preciso criar um novo branch. Durante a construção dessa feature, commits parciais podem ser enviados à branch `dev`. Ao fim da construção dessa funcionalidade, um `pull request` deve ser feito à branch `test`. Quando aprovada nos testes, pode ser realizado o merge com o branch `main`. 

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `test`: versão já testada do software, porém instável
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.

## Gerenciamento de Projeto

### Divisão de Papéis

- Product owner:
Eliane Lessa


- Scrum master:
Eric Mantoani


- Developers:
Alex Pantolfo, Eduardo Lara e Vitor Bergami


### Processo

A ferramenta de gestão de projetos utilizada é o [Github Projects](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t1-wikipedia-indigenas/projects/1)

O Kanban está dividido entre as seguintes etapas:

**Backlog**
- Lista de histórias a serem priorizadas.
  
**To Do**
- Quando um desenvolvedor atribui pra si uma tarefa, ele deve movê-la para `To Do`.

**In Progress**
- Ao início do desenvolvimento de uma tarefa, ela deve ser movida para `In Progress`.
  Ao término, à branch com a feature desenvolvida deve ser submetida à avaliação do time através de um `pull request`.

**Done**
- Quando um `pull request` é aprovado, e seu conteúdo integrado à branch `main`, uma história deve ser movida para o status `Done`.  
  


### Ferramentas

As ferramentas empregadas no projeto são:

- Sublime Text, Visual Studio
- Github
- Microsoft Teams
- Figma

Cada desenvolvedor tem autonomia para eleger o editor de código de sua preferência. 
Para gestão do versionamento do código, é utilizado o Github. 
A ferramenta de comunicação preferencial é o Microsoft Teams.
Para o desenvolvimento de protótipos de baixa e alta fidelidade, é utilizado o Figma.

