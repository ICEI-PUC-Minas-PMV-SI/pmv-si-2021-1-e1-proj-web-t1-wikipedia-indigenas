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

  
  let form = document.getElementById('contatoComunidade');

  form.addEventListener('submit', (e) => { 
  
    e.preventDefault(); e.stopPropagation();
    let data = {
      data: Form.data(form) 
    }

    document.addEventListener('DOMContentLoaded', () => {
        let name = (new URL(location.href)).searchParams.get("name");
        document.getElementById('name').value - name;
        
        console.log(name);
        })
        
        document. geElementById('name').value = name;{
        Form.data(form)
        }
    }

    // fetch('http://api.wiki.local/wiki/contato/create', {
    fetch('https://wiki.previa.app/api/wiki/contato/create', {
      method: 'POST', 
      headers: {
        'Content-type': 'application/json' 
      },
      body: JSON.stringify(data) 
    }).then(r => r.json()) 
      .then(r => { 

        let id = 'modalcontatoComunidade'; 

        let Modal = new bsModal({
          id: id,
          title: 'Escreva sua mensagem',
          message: r.message
        })

        Modal.render(document.getElementsByTagName('body')[0]);
        
        (new bootstrap.Modal(document.getElementById(id), {})).show();

      })

  })


});