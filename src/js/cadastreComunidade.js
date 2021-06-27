// aqui estou importando uma classe javascript que transforma os dados de um formulário html em um objeto JSON
// a instrução "import" só funciona se, no html, o tipo de script for declarado como "module"
// exemplo: <script type="module" src="./js/cadastreComunidade.js"></script>
import Form from './Form.js'
import bsModal from './bsModal.js'

let form = document.getElementById('cadastreComunidade');

// criando listener para o evento "form submit"
// o parâmetro "e" que eu recebo na função é o evento em si, que é um objeto com propriedades e métodos
// é possível ver tudo o que um evento tem dando um console.log(e);
form.addEventListener('submit', (e) => { 
  // aqui estou usando dois métodos do evento que impedem o browser de seguir seu comportamento padrão para envio de formulários
  // isso possibilita que a gente escreva o que quer fazer aqui dentro.
  e.preventDefault(); e.stopPropagation();

  let data = {
    data: Form.data(form) // obtem o JSON dos dados do formulário e atribui a um objeto data, esperado pela API
  }
  // fetch('http://api.wiki.local/wiki/comunidade/create', {
  fetch('https://wiki.previa.app/api/wiki/comunidade/create', {
    method: 'POST', // API espera envio por método POST
    headers: {
      'Content-type': 'application/json' // API espera receber conteúdo do tipo JSON
    },
    body: JSON.stringify(data) // é preciso transformar o objeto `data` em string para transitá-lo por HTTP.
  }).then(r => r.json()) // como resultado, também volta uma string, é preciso então parseá-la como JSON
    .then(r => { // e então usar

      let id = 'modalCadastreComunidade'; 

      // aqui criei um objeto `bsModal` para poder popular dinamicamente a partir do resultado da API.
      // ver: bsModal.js importado no topo.
      let Modal = new bsModal({
        id: id,
        title: 'Cadastre sua comunidade',
        message: r.message
      })

      // renderizando dentro do elemento body, usando o objeto bsModal pra isso.
      Modal.render(document.getElementsByTagName('body')[0]);

      // aproveitei o modal que tinha sido feito pela Mariana, que é do bootstrap.
      // então chamei o objeto Modal do bootstrap para manipulá-lo. Então mandei exibi-lo depois
      // de o ter inserido no body html.
      (new bootstrap.Modal(document.getElementById(id), {})).show();

      // recarregando no localStorage todas as tribos
      loadtribes(true);

    })

})

