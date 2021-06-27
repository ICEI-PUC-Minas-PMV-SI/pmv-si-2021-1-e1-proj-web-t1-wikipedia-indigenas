# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

O projeto utiliza-se de linguages de front-end, sendo o Javascript responsável por se conectar a uma API para buscar os conteúdos exibidos e cadastrar dados nas páginas de formulário. [Documentação da API Wiki Indígena](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t1-wikipedia-indigenas/blob/main/src/API.md).

O javascript foi organizado de modo a separar em arquivos diferentes cada página ou componente. Assim, no diretório `src/js` temos uma lista de arquivos:

&nbsp;

```
home.js
busca.js
cadastreComunidade.js
cadastreSeComoContato.js
contatoComunidade.js
ocorrencias.js
registrarOcorrencias.js
tribos.js
```

&nbsp;


Cada componente ou página reflete um requisito do software, de acordo com os [requsitos descritos na Especificação do Projeto](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t1-wikipedia-indigenas/blob/main/docs/2-Especifica%C3%A7%C3%A3o%20do%20Projeto.md)


### Requisitos Funcionais

| Descrição do Requisito  | Componentes / Páginas |
|-----------------------------------------|----|
| Permitir que o usuário encontre páginas de comunidades | *home.js, busca.js* |
| Permitir que o usuário encontre dados sobre terras indígenas por região do brasil | *home.js, tribo.js* |
| Permitir que o usuário encontre etnias por matriz linguística | *home.js, tribo.js* |
| Permitir que um indígena cadastre-se como membro de uma comunidade | *cadastreSeComoContato.js* | 
| Permitir que um indígena registre ameaças à sua comunidade | *registrarOcorrencias.js, ocorrencias.js* |
| Listar ocorrências registradas por comunidades | *home.js, ocorrencias.js* |
| Permitir o cadastro de novas comunidades | *cadastreComunidade.js* |

