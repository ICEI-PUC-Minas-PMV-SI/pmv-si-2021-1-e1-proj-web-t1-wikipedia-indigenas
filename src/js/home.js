let comunidades = JSON.parse(localStorage.getItem('comunidades'));

let letras = {}
comunidades.forEach(a => {
  if (a.slug != undefined) {
    let l = a.slug.slice(0, 1).toUpperCase();
    if (!letras.hasOwnProperty(l)) {
      letras[l] = [];
    }
    letras[l].push(a);
  }
})


var btnNome = document.getElementById('nome');
btnNome.addEventListener('click', function() {
    clickResponse('nome');
}, false);

var btnLingua = document.getElementById('lingua');
btnLingua.addEventListener('click', function() {
    clickResponse('lingua');
}, false);

var btnLocalidade = document.getElementById('localidade');
btnLocalidade.addEventListener('click', function() {
    clickResponse('localidade');
}, false);

function clickResponse(titulo) {
  var inicioLista = "<ul class='tribe'>"
  var fimLista = "</ul>"
  var divTela = document.getElementById('tribos');

  var lista = inicioLista;

  if (titulo == "nome") {
    lista += imprimeNomes();
  }
  else if (titulo == "lingua") {
    lista += imprimeLingua();
  }
  else {
    lista += imprimeLocalidade();
  }
  lista += fimLista;
  divTela.innerHTML = lista;

}

// function imprimeNomes() {
//   var linha = "";
//   for (var i = 0; i < tribosNome.length; i++) {
//     linha += "<li><h4>" + tribosNome[i].nome + "</h4></li>";
//   } 
//   return linha;
// }

// function imprimeLingua() {
//   var linha = "";
//   for (var i = 0; i < tribosLingua.length; i++) {
//     linha += "<li><h4>" + tribosLingua[i].familiaLinguistica + "</h4></li>";
//   }
//   return linha;
// }

// function imprimeLocalidade() {
//   var linha = "";
//   for (var i = 0; i < tribosLocalidade.length; i++) {
//     linha += "<li><h4>" + tribosLocalidade[i].localidade + "</h4></li>";
//   }
//   return linha;
// }



function imprimeNomes() {
  var linha = [];
  for (var i = 0; i < tribosNome.length; i++) {
    linha +=  "<li><h4>" + tribosNome[i] + "</h4></li>";
  };
  console.log(linha)
  return linha;

}

function imprimeLingua() {
  var linha = "";
  for (var i = 0; i < tribosLingua.length; i++) {
    linha += "<li><h4>" + tribosLingua[i] + "</h4></li>";
  }
  return linha;
}

function imprimeLocalidade() {
  var linha = "";
  for (var i = 0; i < tribosLocalidade.length; i++) {
    linha += "<li><h4>" + tribosLocalidade[i] + "</h4></li>";
  }
  return linha;
}

//Dados de tribos indígenas

let tribosNome = [];

let tribosLingua = [];

let tribosLocalidade = [];

document.addEventListener('DOMContentLoaded', () => {
  buscarPorNome();
  buscarPorFamiliaLinguistica()
  buscarPorLocalidade()
});

function buscarPorNome() {
  fetch('https://wiki.previa.app/api/search/?fl=name&rows=10000')
    .then(res => {
      res.json()
        .then(data => {
          tribosNome = data.docs
            .filter(nome => nome.name != 'undefined')
            .map(nome => nome.name)
            .sort();
          result1 = tribosNome.map(([v]) => v);
          result1 = result1.filter((x, i, a) => a.indexOf(x) == i);

          
          let tudo = [...result1, ...tribosNome];
          let tudoEmOrdemAlfabetica = tudo.sort();
          tribosNome = tudoEmOrdemAlfabetica;
          console.log(tribosNome)
          // console.log(tribosNome);
          clickResponse("nome")
          //return result1;
        })
    })
}

function buscarPorFamiliaLinguistica() {
  fetch('https://wiki.previa.app/api/search/?fl=familiaLinguistica&rows=100000')
    .then(res => {
      res.json()
        .then(data => {
          tribosLingua = data.docs
            .filter(lingua => lingua.familiaLinguistica)
            .map(lingua => lingua.familiaLinguistica)
            .sort();
          //remove itens repetidos
          tribosLingua = tribosLingua.filter((x, i, a) => a.indexOf(x) == i)
          //remove as primeiras letras das strings e joga em um array
          let result = tribosLingua.map(([v]) => v);
          //remove itens repetidos
          result = result.filter((x, i, a) => a.indexOf(x) == i);
          let tudo = [...result, ...tribosLingua];
          let tudoEmOrdemAlfabetica = tudo.sort();
          tribosLingua = tudoEmOrdemAlfabetica;
          //console.log(tribosLingua);
        })
    })
}

function buscarPorLocalidade() {
  fetch('https://wiki.previa.app/api/search/?fl=localizacao&rows=100000')
    .then(res => {
      res.json()
        .then(data => {
          tribosLocalidade = data.docs
            .filter(localidade => localidade.localizacao)
            .map(localidade => localidade.localizacao)
            .sort();
          tribosLocalidade = tribosLocalidade.filter((x, i, a) => a.indexOf(x) == i)
          let result = tribosLocalidade.map(([v]) => v);
          result = result.filter((x, i, a) => a.indexOf(x) == i);
          let tudo = [...result, ...tribosLocalidade];
          let tudoEmOrdemAlfabetica = tudo.sort();
          tribosLocalidade = tudoEmOrdemAlfabetica;
          //console.log(tribosLocalidade);
        })
    })
}
