var atual; 
var localStorage = Window.localStorage; 

function menuCadastro(){
    atual.classList.add("d-none"); 
    atual = document.getElementById("cadastro"); 
    atual.classList.remove("d-none"); 
}            


    keys.forEach(function(chave, pos){ 
        let pessoa = JSON.parse(localStorage.getItem(chave)); 
        let linha = document.createElement("tr"); 
        let ancora = document.createElement("a"); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.nome; 
        linha.appendChild(coluna);
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.email; 
        linha.appendChild(coluna); 
        coluna = document.createElement("td"); 
        coluna.innerHTML=pessoa.msg; 
        linha.appendChild(coluna); 
        document.getElementById("corpoTabela").appendChild(linha); 
    });
    
}

function gravar(){ 
    var novo = new Object(); 
    novo.nome=document.getElementById("nome").value; 
    novo.email=document.getElementById("email").value; 
    novo.msg=document.getElementById("msg").value; 
    var jt = JSON.stringify(novo); 
}