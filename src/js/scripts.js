// wikipedia indígenas

function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

var Home = {

	mainImages: [
		'https://pib.socioambiental.org/images/povos/76983097518bfcf79468b.jpg',
		'https://pib.socioambiental.org/images/povos/14873561034e42db5ff41c8.jpg',
		'https://pib.socioambiental.org/images/povos/155235493054457896c7136.jpg'
	],

	init: () => {
		Home.mainImage();
	},

	mainImage: () => {
		document.getElementById('main-image').style.backgroundImage = `url('${Home.mainImages[random(0, 3)]}')`;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	Home.init();
	clickResponse("nome");
});



var btnNome = document.getElementById('nome');
btnNome.addEventListener('click', function () {
	clickResponse('nome');
}
	, false);

var btnLingua = document.getElementById('lingua');
btnLingua.addEventListener('click', function () {
	clickResponse('lingua');
}
	, false);

var btnLocalidade = document.getElementById('localidade');
btnLocalidade.addEventListener('click', function () {
	clickResponse('localidade');
}
	, false);

function clickResponse(titulo) {
	var inicioLista = "<ul>"
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

function imprimeNomes() {
	var linha = "";
	for (var i = 0; i < tribosNome.length; i++) {
		linha += "<li><h4>" + tribosNome[i].nome + "</h4></li>";
	} 
	return linha;
}

function imprimeLingua() {
	var linha = "";
	for (var i = 0; i < tribosLingua.length; i++) {
		linha += "<li><h4>" + tribosLingua[i].familiaLinguistica + "</h4></li>";
	}
	return linha;
}

function imprimeLocalidade() {
	var linha = "";
	for (var i = 0; i < tribosLocalidade.length; i++) {
		linha += "<li><h4>" + tribosLocalidade[i].localidade + "</h4></li>";
	}
	return linha;
}

//Dados de tribos indígenas

const tribosNome = [
	{ "nome": "Aikanã"},
	{ "nome": "Aikewara"},
	{ "nome": "Akuntsu"},
	{ "nome": "Amanayé"},
	{ "nome": "Amondawa"},
];

const tribosLingua = [
	{ "familiaLinguistica": "Aikaná"},
	{ "familiaLinguistica": "Arawá"},
	{ "familiaLinguistica": "Arikén"},
	{ "familiaLinguistica": "Aruak"},
	{ "familiaLinguistica": "Bora"},
];

const tribosLocalidade = [
	{ "localidade": "Acre" },
	{ "localidade": "Alagoas" },
	{ "localidade": "Amazonas" },
	{ "localidade": "Amapá" },
	{ "localidade": "Bahia" },
];