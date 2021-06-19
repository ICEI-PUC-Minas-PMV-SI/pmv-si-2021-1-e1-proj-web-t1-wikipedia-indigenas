

// TODO: json para mapear sigla de estado para seu nome completo
/*const stateName = {
  "MG": "Minas Gerais",
  "SP": "São Paulo",
  //...
}*/

document.addEventListener('DOMContentLoaded', () => {

  const tribo = (new URL(location.href)).searchParams.get("name");
  const queryUrl = `https://wiki.previa.app/api/search/?q=slug:${tribo}&fq=module:comunidade`

  fetch(queryUrl, {
    method: 'GET',
  }).then(r => r.json())
  .then(r => {
    let info = r['docs'][0];

    document.getElementById('nomeTribo').innerHTML          = info['name'];
    document.getElementById('paragrafo').innerHTML          = info['paragrafo'];
    document.getElementById('autodenominacao').innerHTML    = info['autodenominacao'];
    document.getElementById('localizacao').innerHTML        = info['localizacao'];
    document.getElementById('populacao').innerHTML          = info['populacao'];
    document.getElementById('familiaLinguistica').innerHTML = info['familiaLinguistica'];

  })


})