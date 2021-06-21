import Form from './Form.js'
import bsModal from './bsModal.js'
import toElement from './toElement.js'

document.addEventListener('DOMContentLoaded', () => {
  

  const tribo = (new URL(location.href)).searchParams.get("name");
  document.getElementById('name').value = tribo;
  // populando o <select> com os nomes das tribos
  fetch(`https://wiki.previa.app/api/search/?q=slug:${tribo}&rows=1&fl=imagem,name`)
    .then(r => r.json())
    .then(r => {
      if(r.numFound > 0){
        let tribo = r.docs[0];  
        document.getElementById('main-image').style.backgroundImage = `url('${tribo.imagem}')`;
        document.getElementById('nome-da-tribo').innerText = tribo.name;
      }
      
    })

  
  // let form = document.getElementById('contatoComunidade');

  // form.addEventListener('submit', (e) => { 
  
  //   e.preventDefault(); e.stopPropagation();
  //   let data = {
  //     data: Form.data(form) 
  //   }

  //   fetch('https://wiki.previa.app/api/wiki/contato/create', {
  //     method: 'POST', 
  //     headers: {
  //       'Content-type': 'application/json' 
  //     },
  //     body: JSON.stringify(data) 
  //   }).then(r => r.json()) 
  //     .then(r => { 

  //       let id = 'modalContatoComunidade'; 

  //       let Modal = new bsModal({
  //         id: id,
  //         title: 'Contato com a comunidade',
  //         message: r.message
  //       })

  //       Modal.render(document.getElementsByTagName('body')[0]);
        
  //       (new bootstrap.Modal(document.getElementById(id), {})).show();

  //     })

  // })


});