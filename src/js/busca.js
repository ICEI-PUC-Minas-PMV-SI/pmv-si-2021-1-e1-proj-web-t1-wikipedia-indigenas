let s = [];
let tamanho = '';
let searchString = '';
const searchBar = document.getElementById('search-bar');

async function loadtribes() {
    const res = await fetch('https://wiki.previa.app/api/search/');
    const tribos = await res.json();
    s = tribos.docs;
    console.log(s);
}
loadtribes();

searchBar.addEventListener('keyup', (e) => {
    var searchString = (e.target.value.toLowerCase());
    var filteredtribes = s.filter(valortribo => {
        return (
            valortribo.name.toLowerCase().includes(searchString) ||
            valortribo.localizacao.toLowerCase().includes(searchString) ||
            valortribo.familiaLinguistica.toLowerCase().includes(searchString)
        );
    });
    var tamanho = filteredtribes.length;

    console.log(filteredtribes);

    while (searchString != '' || searchString == '') {
        if (searchString != '' && tamanho != 0) {
            var resul =
                `<h1>${searchString}</h1>
        <p>${tamanho} resultados encontrados</p>`
            let tpl = '';
            filteredtribes.forEach(tribo => {
                tpl +=
                    `<div class="container">
        <h3><a href="tribos/maxakali.html">${tribo.name}</a></h3>
    ${tribo.paragrafo}
    </div>`
            });
            document.getElementById('busca').style.display = 'none';
            document.getElementById('main-image').style.display = 'none';
            document.getElementById('resultadosencontrados').innerHTML = resul;
            document.getElementById('resultadobusca').innerHTML = tpl;
        } else if (searchString == '') {
            let test = `<h1>Nada foi encontrado</h1>`
            document.getElementById('test').style.display = 'none';
            document.getElementById('test').innerHTML = test;
            document.getElementById('busca').style.display = 'block';
            document.getElementById('main-image').style.display = 'block';
        } else if (tamanho == 0) {
            let test = `<h1>Nada foi encontrado</h1>`
            document.getElementById('test').innerHTML = test;
        }
        break;
    }
});