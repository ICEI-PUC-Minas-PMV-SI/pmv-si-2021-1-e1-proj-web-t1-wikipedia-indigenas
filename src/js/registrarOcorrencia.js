import Form from './Form.js'
import bsModal from './bsModal.js'
import toElement from './toElement.js'

document.addEventListener('DOMContentLoaded', () => {
  

  // populando o <select> com os nomes das tribos
  fetch('https://wiki.previa.app/api/search/?fl=name,slug&rows=500&sort=titleAlpha+ASC')
    .then(r => r.json())
    .then(r => {

      r.docs.forEach(tribo => {
        if(tribo.hasOwnProperty('name')){
          document.querySelector('select[name="name"]')
            .append(toElement(
              `<option value="${tribo.slug}">${tribo.name}</option>`
            ))  
        }
      })

    })

  
  let form = document.getElementById('registrarOcorrencia');

  form.addEventListener('submit', (e) => { 
  
    e.preventDefault(); e.stopPropagation();
    let data = {
      data: Form.data(form) 
    }

    // fetch('http://api.wiki.local/wiki/ocorrencias/create', {
    fetch('https://wiki.previa.app/api/wiki/ocorrencias/create', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(data) 
    }).then(r => r.json()) 
      .then(r => { 

        let id = 'modalRegistrarOcorrencia'; 

        let Modal = new bsModal({
          id: id,
          title: 'Registre uma ocorrência',
          message: r.message
        })

        Modal.render(document.getElementsByTagName('body')[0]);
        
        (new bootstrap.Modal(document.getElementById(id), {})).show();

      })

  })


});