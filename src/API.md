# Wiki Indígenas API

`Version: 1.0.1` `Last update: 12 Jun 2021` `Released at: 01 Jun 2021`

------------

API para consulta e cadastro de dados do projeto Wiki API

------------

#### Changelog
**12 Jun 2021**
- Novo serviço `[POST] /wiki/ocorrencias/create` para registro de ocorrências em comunidades
- Novo serviço `[POST] /wiki/comunidade/create` para registro de novas comunidades

-------------

#### Índice

[TOC]

------------

### Ambientes

**produção**

    https://wiki.previa.app/

------------

## Busca
Lista todo conteúdo, com possibilidade de filtros a partir dos parâmetros descritos abaixo

#### Request

`GET /search`

#### Parâmetros
|key|type/format|mandatory|format|default|description|
| ------------ | ------------ | ------------ | ------------ | ------------ |
|**q**|*string*| opcional | *valor* OU *chave:valor*  | \*:\*  | query, termos a serem buscados |
|**fq**|*string*| opcional | *chave:valor*  | \*:\*  | filtro de query |
|**fl**|*string*| opcional | *campo1,campo2...* (campos separados por vírgula)  | *  | campos que devem aparecer no resultado |
|**start**|*int*| opcional | *int*  | 0  | índice de início dos resultados |
|**rows**|*int*| opcional  | *int*  | 30  | quantidade de resultados  | 
|**sort**|*string*| opcional | *campo ASC* ou *campo DESC*  | [vazio]  | ordenação dos resultados |
|**group**|*string*| opcional | *string* (nome do campo)  | [vazio]  | campo para resultado ser agrupado por |



#### Exemplo
    curl --location --request GET 'https://wiki.previa.app/api/search/' 


#### Resposta
```
HTTP/1.1 200 OK
Date: Sat, 11 Jun 2021 22:45:24 GMT
Status: 200 OK
Content-Type: application/json;

{
  "numFound": 239,
  "start": 0,
  "docs": [{
    "name": "Aikan\u00e3",
    "localizacao": "RO",
    "populacao": "350 (Siasi\/Sesai, 2014)",
    "autodenominacao": "Aikan\u00e1",
    "familiaLinguistica": "Aikan\u00e1",
    "imagem": "https:\/\/pib.socioambiental.org\/images\/povos\/7805119074877775eb873b.jpg",
    "paragrafo": "A Terra Ind\u00edgena em que hoje habita a maioria dos Aikan\u00e3 n\u00e3o corresponde ao seu territ\u00f3rio tradicional (veja a lista de \"Terras Habitadas\" no menu \u00e0 direita). Foram levados para l\u00e1 pelo <a href=\"\/pt\/%C3%93rg%C3%A3o_Indigenista_Oficial\" title=\"\u00d3rg\u00e3o Indigenista Oficial\">\u00f3rg\u00e3o indigenista<\/a> em 1970, juntamente com outros dois povos ind\u00edgenas. Dada a pouca fertilidade do solo, tiravam seu sustento da seringa, mas, devido \u00e0 queda no pre\u00e7o desse produto, hoje encontram s\u00e9rias dificuldades em sua reprodu\u00e7\u00e3o f\u00edsica e cultural. Longe de se resignarem com essa situa\u00e7\u00e3o, os Aikan\u00e3 atualmente desenvolvem projetos de valoriza\u00e7\u00e3o cultural e <a href=\"#L.C3.ADngua_e_escola\"> procuram manter viva a l\u00edngua por meio da forma\u00e7\u00e3o escolar bil\u00edng\u00fce<\/a>.\n",
    "link": "https:\/\/pib.socioambiental.org\/pt\/Povo:Aikan\u00e3",
    "nomes": ["Ione Vasconcelos"],
    "cargos": ["Ling\u00fcista, docente na Universidade Cat\u00f3lica de Bras\u00edlia"],
    "module": "comunidade",
    "solrId": "wiki\/comunidade\/aikana",
    "origin": "crawler",
    "slug": "aikana",
    "sortDate": "2021-06-12T15:40:29Z",
    "_version_": 1702387494006292480
  }, {
    "name": "Akuntsu",
    "localizacao": "RO",
    "populacao": "3 (Fabricio Amorim, 2019)",
    "autodenominacao": "",
    "familiaLinguistica": "Tupari",
    "imagem": "https:\/\/pib.socioambiental.org\/images\/povos\/80690931848779eaa33236.jpg",
    "paragrafo": "Os \u00faltimos cinco sobreviventes dos chamados Akuntsu vivem em pequenas malocas pr\u00f3ximas uma da outra, nas matas do igarap\u00e9 Omer\u00ea, afluente da margem esquerda do rio Corumbiara, no sudeste de Rond\u00f4nia. A \u00e1rea constitui uma pequena reserva de mata outrora pertencente a uma fazenda particular interditada pela  <a href=\"\/pt\/%C3%93rg%C3%A3o_Indigenista_Oficial#Funda.C3.A7.C3.A3o_Nacional_do_.C3.8Dndio_.28Funai.29\" title=\"\u00d3rg\u00e3o Indigenista Oficial\">Funai<\/a> no final dos anos 1980. Caracteriza-se por floresta equatorial de terra firme, razo\u00e1vel incid\u00eancia de pequenos morros, poucas nascentes e, assim como as demais reservas de mata de Rond\u00f4nia, encontra-se seriamente amea\u00e7ada por frentes agropastoris.\n",
    "link": "https:\/\/pib.socioambiental.org\/pt\/Povo:Akuntsu",
    "nomes": ["Adelino de Lucena Mendes"],
    "cargos": ["Professor universit\u00e1rio e pesquisador."],
    "module": "comunidade",
    "solrId": "wiki\/comunidade\/akuntsu",
    "origin": "crawler",
    "slug": "akuntsu",
    "sortDate": "2021-06-12T15:40:29Z",
    "_version_": 1702387494167773184
  }, {
    "name": "Aikewara",
    "localizacao": "PA",
    "populacao": "383 (Siasi\/Sesai, 2014)",
    "autodenominacao": "Aikewara",
    "familiaLinguistica": "Tupi-Guarani",
    "imagem": "https:\/\/pib.socioambiental.org\/images\/povos\/1859453733487def0f3d523.jpg",
    "paragrafo": "Os Aikewara atingiram a sua localiza\u00e7\u00e3o atual no in\u00edcio do s\u00e9culo XX, fugindo dos repetidos ataques dos <a href=\"\/pt\/Povo:Kayap%C3%B3_Xikrin\" title=\"Povo:Kayap\u00f3 Xikrin\">Xikrin<\/a>, quando habitavam \u00e0s margens do rio Vermelho, afluente do Itacai\u00fanas. Entraram em contato definitivo com os brancos em 1960, quando uma epidemia de gripe matou dois ter\u00e7os da popula\u00e7\u00e3o, reduzindo-a de 126 para 40 pessoas. Em 1962, uma epidemia de var\u00edola matou mais seis pessoas. A partir de ent\u00e3o, os Aikewara, deixando de lado as suas medidas de controle de natalidade, iniciaram uma vertiginosa recupera\u00e7\u00e3o populacional. Em 1997, a popula\u00e7\u00e3o atingiu a cifra de 185 pessoas.\n",
    "link": "https:\/\/pib.socioambiental.org\/pt\/Povo:Aikewara",
    "nomes": ["Roque de Barros Laraia"],
    "cargos": ["Universidade de Brasilia"],
    "module": "comunidade",
    "solrId": "wiki\/comunidade\/aikewara",
    "origin": "crawler",
    "slug": "aikewara",
    "sortDate": "2021-06-12T15:40:29Z",
    "_version_": 1702387494108004352
  }]
}
```




&nbsp;
&nbsp;

## Registrar ocorrência
Endpoint para cadastro de uma nova comunidade

#### Request

`POST /wiki/ocorrencias/create`


####Objeto
No corpo da requisição `body-raw` deve ser enviado um objeto `data` conforme exemplo abaixo

```
{
  "data": {
    "name": "karipuna-de-rondonia",
    "ocorrencia": "invasao",
    "autor": "Adriano Karipuna",
    "email": "ericmantoani+karipuna@gmail.com",
    "description": "Armados e equipados com recursos avançados, como aparelhos de georreferenciamento (GPS), grileiros avançam sobre reservas indígenas, intimidam e ameaçam povos de diversas etnias. Promovem suas próprias demarcações, criam estradas clandestinas e espalham o terror. Entre os crimes praticados estão a exploração de garimpos, a extração de madeira e o loteamento de terras."
  }
}
```

#####Propriedades
|key|type/format|mandatory|description|
| ------------ | ------------ | ------------ | ------------ |
|**name**|*string*| obrigatório | slug de uma comunidade previamente cadastrada |
|**ocorrencia**|*string*| obrigatório | slug do tipo de ocorrência, conforme lista pré-definida |
|**autor**|*string*| obrigatório | autor da ocorrência |
|**email**|*string*| obrigatório | email do autor da ocorrência |
|**description**|*string*| obrigatório | texto com a descrição da ocorrência |


