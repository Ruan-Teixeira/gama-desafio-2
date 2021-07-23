alert("Seja bem vindo ao sistema de cadastro");


function cadastraCliente(){
    let campo1 = document.getElementById("campo1");
    let campo2 = document.getElementById("campo2");
    let campo3 = document.getElementById("campo3");
    let campo4 = document.getElementById("campo4");
    let campo5 = document.getElementById("campo5");

    let dados = JSON.parse(localStorage.getItem("dadosCliente"));

    if(dados == null){
        localStorage.setItem("dadosCliente", "[]");
        dados = [];
    }

    let registro = {
        nome: campo1.value,
        email: campo2.value,
        cpf: campo3.value,
        telefone: campo4.value,
        endereço: campo5.value
    }

    dados.push(registro);

    localStorage.setItem("dadosCliente", JSON.stringify(dados));
    alert("Cadastro Realizado!");

    campo1.value = "";
    campo2.value = "";
    campo3.value = "";
    campo4.value = "";
    campo5.value = "";
}


function cadastraProduto(){
    let campo6 = document.getElementById("campo6");
    let campo7 = document.getElementById("campo7");
    let campo8 = document.getElementById("campo8");
    let campo9 = document.getElementById("campo9");
    let campo10 = document.getElementById("campo10");

    let dados = JSON.parse(localStorage.getItem("dadosProduto"));

    if(dados == null){
        localStorage.setItem("dadosProduto", "[]");
        dados = [];
    }

    let registro = {
        codigo: campo6.value,
        produto: campo7.value,
        marca: campo8.value,
        quantidade: campo9.value,
        observações: campo10.value
    }

    dados.push(registro);

    localStorage.setItem("dadosProduto", JSON.stringify(dados));
    alert("Produto cadastrado com sucesso!");

    campo6.value = "";
    campo7.value = "";
    campo8.value = "";
    campo9.value = "";
    campo10.value = "";
}