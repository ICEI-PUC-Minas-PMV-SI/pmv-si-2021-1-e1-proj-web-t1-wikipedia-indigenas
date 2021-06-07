var atual; //Armazena o container que está sendo apresentado na tela (cadastro ou relatório)
var localStorage = Window.localStorage; 

function menuCadastro(){
    atual.classList.add("d-none"); //Para esconder o container em apresentação é feita a adição da classe d-none
    atual = document.getElementById("cadastro"); //Busca o container que apresenta a tela de cadastro
    atual.classList.remove("d-none"); //Remove a classe d-none do container de cadastro para que ele fique visível
}            


    keys.forEach(function(chave, pos){ //Percorre o vetor de chaves e para cada chave encontrada, executa o código abaixo
        let pessoa = JSON.parse(localStorage.getItem(chave)); //Recupera o JSON associado a uma determinada chave e o transforma em objeto
        let linha = document.createElement("tr"); //Cria um novo elemento TR (linha)
        let ancora = document.createElement("a"); //Cria uma nova âncora (link)
        coluna = document.createElement("td"); //Cria um novo elemento TD para armazenar o nome
        coluna.innerHTML=pessoa.nome; //Define o nome como texto da célula (TD)
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)
        coluna = document.createElement("td"); //Cria um novo elemento TD para armazenar o email
        coluna.innerHTML=pessoa.email; //Define o email como texto da célula (TD)
        linha.appendChild(coluna); //Adiciona a célula (TD) de e-mail à linha (TR)
        coluna = document.createElement("td"); //Cria um novo elemento TD para armazenar Comunidade
        coluna.innerHTML=pessoa.comunidade; //Define a comunidade do usuário (TD)
        linha.appendChild(coluna); //Adiciona a célula (TD) da comunidade do usuário à linha (TR)
        coluna = document.createElement("td"); //Cria um novo elemento TD para armazenar a Estado de Localização do Território
        coluna.innerHTML=pessoa.estado; //Define o Estado do usuário (TD)
        linha.appendChild(coluna); //Adiciona a célula (TD) do Estado do usuário à linha (TR)
        document.getElementById("corpoTabela").appendChild(linha); //Adiciona a linha (TR) ao corpo da tabela (TBODY)
    });
    
}

function gravar(){ //Função que grava os dados da interface na LocalStorage
    var novo = new Object(); //Cria um novo objeto "vazio"
    novo.nome=document.getElementById("nome").value; //Busca, na interface, o conteúdo do input "nome" e o define como atributo do objeto "novo"
    novo.email=document.getElementById("email").value; //Busca, na interface, o conteúdo do input "email" e o define como atributo do objeto "novo"
    novo.comunidade=document.getElementById("comunidade").value; //Busca, na interface, o conteúdo do input "msg" e o define como atributo do objeto "novo"
    novo.estado=document.getElementById("estado").value; //Busca, na interface, o conteúdo do input "estado" e o define como atributo do objeto "novo"
    var jt = JSON.stringify(novo); //Gera um JSON com as propriedades do objeto "novo"
}