# Registro de Testes de Software

## Avaliação

Foram realizados testes funcionais do sistema, de acordo com o [Plano de testes funcionais](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t1-wikipedia-indigenas/blob/main/docs/8-Plano%20de%20Testes%20de%20Software.md).

Os testes foram realizados [no ambiente de produção](https://indigenas.previa.app/) em 27/junho/2021 às 12h.

Inicialmente, foram reportados os seguintes bugs:
- Ao cadastrar uma nova comunidade, a mesma não aparece no glossário da home.
- Ao cadastrar uma nova comunidade, a busca deixa de funcionar.
- O formulário de contato retorna uma mensagem de sucesso, mas nenhuma requisição é feita às API.

Os dois primeiros bugs se referiam a um comportamento de cache das comunidades em localStorage. 
O problema foi resolvido definitivamente renovando o cache a cada novo cadastro.

O último problema se referia a uma inconsistência na estrutura do HTML, causada por um erro no versionamento dos arquivos.

Novos testes foram realizados [no ambiente de produção](https://indigenas.previa.app/) em 27/junho/2021 às 18h, e o resultado foi a constatação de que os bugs reportados foram corrigidos e [Plano de testes funcionais](https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2021-1-e1-proj-web-t1-wikipedia-indigenas/blob/main/docs/8-Plano%20de%20Testes%20de%20Software.md) foi atendido em 100% das funcionalidades ali descritas.
