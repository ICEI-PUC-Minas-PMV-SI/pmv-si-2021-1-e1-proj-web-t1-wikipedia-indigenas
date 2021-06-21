let comunidades = JSON.parse(localStorage.getItem('comunidades'));

let letras = {}
let i18n = {}
comunidades.forEach(a => {
  if (a.slug != undefined) {
      let l = a.slug.slice(0, 1).toUpperCase();
      if (!letras.hasOwnProperty(l)) {
          letras[l] = [];
      }
      letras[l].push(a);
      i18n[a.slug] = a.name;
  }
})


const Home = {
  init: () => {
    Home.cards();
    Home.ocorrencias();
    Home.encontre();
  },

  encontre: () => {
    let tpl = '';

    Object.keys(letras).sort().forEach(l => {
      tpl += 
        `<div class="letra">
          <h2>${l}</h2>`;

      letras[l].forEach(a => {
        tpl += 
        `<nav>
          <a href="./tribos/index.html?name=${a.slug}">${a.name}</a>
        </nav>`
      })

      tpl += `</div>`;

    });

    document.getElementById('tribos').innerHTML = tpl;

  },

  ocorrencias: () => {
    fetch('https://wiki.previa.app/api/search/?fq=module:ocorrencias&sort=sortDate DESC&rows=3')
      .then(r => r.json())
      .then(r => {
        document.getElementById('ocorrenciasNumFound').innerText = r.numFound;

        let tpl = '<table>';

        r.docs.forEach(a => {
          if(a.name != '' && a.name != 'undefined'){

            let description = a.description;
            if(description.length > 50){
              description = description.slice(0, 50) + '...';
            }

            tpl += 
              `<tr>
                <td style="padding-right:1rem">${i18n[a.name]}</td>
                <td>${description}</td>
              </tr>` 
          }
        })
        tpl += `</table>`

        document.getElementById('ocorrenciasLast').innerHTML = tpl;

      });
  },

  cards: () => {
    let randomCard1 = comunidades[Math.floor(Math.random() * comunidades.length)];
    let randomCard2 = comunidades[Math.floor(Math.random() * comunidades.length)];
    let randomCard3 = comunidades[Math.floor(Math.random() * comunidades.length)];

    while (randomCard1 == randomCard2 || randomCard2 == randomCard3 || randomCard1 == randomCard3 || randomCard1.imagem == '' || randomCard1.paragrafo == '' || randomCard2.imagem == '' || randomCard2.paragrafo == '' || randomCard3.imagem == '' || randomCard3.paragrafo == '') {
        randomCard1 = comunidades[Math.floor(Math.random() * comunidades.length)];
        randomCard2 = comunidades[Math.floor(Math.random() * comunidades.length)];
        randomCard3 = comunidades[Math.floor(Math.random() * comunidades.length)];
    }

    const card1 =
        `<a href=./tribos/index.html?name=${randomCard1.slug}>
         <div class="card">
           <img class="card-img-top" src="${randomCard1.imagem}">
           <div class="card-body">
               <h5 class="card-title text-center">${randomCard1.name}</h5>
               <p class="card-text">${randomCard1.paragrafo}</p>
           </div>
         </div>
         </a>`
    document.getElementById('card1').innerHTML = card1;

    const card2 = `<a href=./tribos/index.html?name=${randomCard2.slug}>
    <div class="card">
      <img class="card-img-top" src="${randomCard2.imagem}">
      <div class="card-body">
          <h5 class="card-title text-center">${randomCard2.name}</h5>
          <p class="card-text">${randomCard2.paragrafo}</p>
      </div>
    </div>
    </a>`
    document.getElementById('card2').innerHTML = card2;

    const card3 = `<a href=./tribos/index.html?name=${randomCard3.slug}>
    <div class="card">
    <img class="card-img-top" src="${randomCard3.imagem}">
    <div class="card-body">
        <h5 class="card-title text-center">${randomCard3.name}</h5>
        <p class="card-text">${randomCard3.paragrafo}</p>
    </div>
    </div>
    </a>`
    document.getElementById('card3').innerHTML = card3;
  }


}













// var btnNome = document.getElementById('nome');
// btnNome.addEventListener('click', function() {
//     clickResponse('nome');
// }, false);

// var btnLingua = document.getElementById('lingua');
// btnLingua.addEventListener('click', function() {
//     clickResponse('lingua');
// }, false);

// var btnLocalidade = document.getElementById('localidade');
// btnLocalidade.addEventListener('click', function() {
//     clickResponse('localidade');
// }, false);

// function clickResponse(titulo) {
//     var inicioLista = "<ul>"
//     var fimLista = "</ul>"
//     var divTela = document.getElementById('tribos');

//     var lista = inicioLista;

//     if (titulo == "nome") {
//         lista += imprimeNomes();
//     } else if (titulo == "lingua") {
//         lista += imprimeLingua();
//     } else {
//         lista += imprimeLocalidade();
//     }
//     lista += fimLista;
//     divTela.innerHTML = lista;

// }

// function imprimeNomes() {
//     var linha = "";
//     for (var i = 0; i < tribosNome.length; i++) {
//         linha += "<li><h4>" + tribosNome[i].nome + "</h4></li>";
//     }
//     return linha;
// }

// function imprimeLingua() {
//     var linha = "";
//     for (var i = 0; i < tribosLingua.length; i++) {
//         linha += "<li><h4>" + tribosLingua[i].familiaLinguistica + "</h4></li>";
//     }
//     return linha;
// }

// function imprimeLocalidade() {
//     var linha = "";
//     for (var i = 0; i < tribosLocalidade.length; i++) {
//         linha += "<li><h4>" + tribosLocalidade[i].localidade + "</h4></li>";
//     }
//     return linha;
// }

// //Dados de tribos indígenas

// const tribosNome = [
//     { "nome": "Aikanã" },
//     { "nome": "Aikewara" },
//     { "nome": "Akuntsu" },
//     { "nome": "Amanayé" },
//     { "nome": "Amondawa" },
// ];

// const tribosLingua = [
//     { "familiaLinguistica": "Aikaná" },
//     { "familiaLinguistica": "Arawá" },
//     { "familiaLinguistica": "Arikén" },
//     { "familiaLinguistica": "Aruak" },
//     { "familiaLinguistica": "Bora" },
// ];

// const tribosLocalidade = [
//     { "localidade": "Acre" },
//     { "localidade": "Alagoas" },
//     { "localidade": "Amazonas" },
//     { "localidade": "Amapá" },
//     { "localidade": "Bahia" },
// ];

document.addEventListener('DOMContentLoaded', () => {
  Home.init();
//     clickResponse("nome");
});