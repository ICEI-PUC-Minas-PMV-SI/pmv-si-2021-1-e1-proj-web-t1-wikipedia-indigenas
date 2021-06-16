let s = [];
let tamanho = '';
let searchString = '';
const searchBar = document.getElementById('search-bar');

async function loadtribes() {
    const res = await fetch('https://wiki.previa.app/api/search/?fl=name,localizacao,paragrafo,familiaLinguistica,slug&rows=999');
    const tribos = await res.json();
    s = tribos.docs;
    console.log(s);
}
loadtribes();

searchBar.addEventListener('keyup', (e) => {
    var searchString = (e.target.value.toLowerCase());
    var buscafinal = searchString.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    var filteredtribes = s.filter(valortribo => {
        return (
            ((valortribo.hasOwnProperty('familiaLinguistica')) ? valortribo.localizacao.toLowerCase().includes(buscafinal) : false) ||
            ((valortribo.hasOwnProperty('localizacao')) ? valortribo.localizacao.toLowerCase().includes(buscafinal) : false) ||
            valortribo.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(buscafinal)

        );
    });
    var tamanho = filteredtribes.length;

    console.log(filteredtribes);

    if (searchString != '' && tamanho != 0) {
        let test = `
            <div id="resultadosencontrados">
            </div>
    
            <div id="resultadobusca" class="container distanciamento">
            </div>`;
        var resul =
            `<h1>${e.target.value}</h1>
        <p>${tamanho} resultados encontrados</p>`
        let tpl = '';
        filteredtribes.forEach(tribo => {

            tpl +=
                `<div class="container distanciamento">
                 <h3><a href=#>${tribo.name}</a></h3>
             ${tribo.paragrafo}
             </div>`
        });
        document.getElementById('test').innerHTML = test;
        document.getElementById('test').style.display = 'block';
        document.getElementById('busca').style.display = 'none';
        document.getElementById('main-image').style.display = 'none';
        document.getElementById('resultadosencontrados').innerHTML = resul;
        document.getElementById('resultadobusca').innerHTML = tpl;
    } else if (searchString == '') {
        let test = `<h1>Nada foi encontrado</h1>
            <div id="resultadosencontrados">
            </div>
    
            <div id="resultadobusca" class="container distanciamento">
            </div>`
        document.getElementById('test').style.display = 'none';
        document.getElementById('test').innerHTML = test;
        document.getElementById('busca').style.display = 'block';
        document.getElementById('main-image').style.display = 'block';
    } else if (tamanho == 0) {
        let test = `<h1>Nada foi encontrado</h1>
            <div id="resultadosencontrados">
        </div>

        <div id="resultadobusca" class="container distanciamento">
        </div>`
        document.getElementById('test').innerHTML = test;
    }
});