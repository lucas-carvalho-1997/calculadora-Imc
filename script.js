let arrDados = []; // array global vazio

function calcular() {
    // pegar os dados do formulario
    let nome = document.getElementById("nome").value;
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    console.log(nome, altura, peso);

    // validar se os dados estão preenchidos
    if (nome == "" || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos");
        return false; //para a execução do script
    }

    // calcular o imc
    let imc = calculaImc(altura, peso);

    // gerar o texto da situação
    let situacao = geraSituacao(imc);

    // gerar o objeto com todos os dados do cadastro
    let pessoa = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        situacao: situacao
    };
    // cadastra a pessoa no array de dados
    arrDados.push(pessoa);

    // chamar a função pra exibir os cadastros
    exibeCadastro()
}

function geraSituacao(imc) {
    if (imc < 18.5) {
        return "Magreza Severa";

    } else if (imc > 18.5 && imc <= 24.99) {
        return "Peso Normal";

    }
    else if (imc > 24.99 && imc <= 29.99) {
        return "Acima do Peso";

    }
    else if (imc > 29.99 && imc <= 34.99) {
        return "Obesidade I";

    }
    else if (imc > 34.99 && imc <= 39.99) {
        return "Obesidade II (Severa)";

    }
    else {
        return "Obesidade III (Mórbida)";
    };
}

function calculaImc(altura, peso) {
    return peso / (altura * altura);
}

function exibeCadastro() {
    // deve ler um array de cadastros
    let linhaTabela ='';
    for(let i = 0; i < arrDados.length; i++){
        linhaTabela = `<tr>
        <td>${arrDados[i].nome}</td>                    
        <td>${arrDados[i].altura}</td>                    
        <td>${arrDados[i].peso}</td>                    
        <td>${arrDados[i].imc.toFixed(2)}</td>                    
        <td>${arrDados[i].situacao}</td>                    
        </tr>`;
    } 
    document.getElementById("cadastro").innerHTML += linhaTabela;
}