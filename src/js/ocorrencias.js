const _date = a => {
  let Y = a.slice(0,4);
  let m = a.slice(5,7);
  let d = a.slice(8,10);

  let H = a.slice(11,13);
  let i = a.slice(14,16);

  return `${d}/${m}/${Y} às ${H}h${i}`;
}

let ocorrencias = () => {
  fetch('https://wiki.previa.app/api/search/?fq=module:ocorrencias&sort=sortDate DESC&rows=999')
    .then(r => r.json())
    .then(r => {
      
      let tinqs = '';

      r.docs.forEach(a => {
        tinqs += `<p class="dataHora">${_date(a.sortDate)}</p>
        <p class="tribo">${a.name}</p>
        <p class="fatos">${a.description}</p>`
      });

      document.getElementById('dadosOcorrencia').innerHTML += tinqs;

      
    });
}

ocorrencias();