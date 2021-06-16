document.addEventListener('DOMContentLoaded', () => {


  // `tribos/index.html?name=${tribo}`

  let tribo = (new URL(location.href)).searchParams.get("name");

  console.log(tribo);

})