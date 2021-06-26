

let ocorrencias = () => {
  fetch('https://wiki.previa.app/api/search/?fq=module:ocorrencias&sort=sortDate DESC&rows=999')
    .then(r => r.json())
    .then(r => {
      
      let tinqs = '';

      r.docs.forEach(a => {
        console.log(a);
        tinqs += `<p id="dataHora">${a.sortDate}</p>
        <p id="tribo">${a.name}</p>
        <p id="fatos">${a.description}</p>`
      });

      document.getElementById('dadosOcorrencia').innerHTML += tinqs;

      
    });
}

ocorrencias();