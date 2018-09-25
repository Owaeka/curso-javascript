var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

console.log(pacientes);

for(var contador=0; contador < pacientes.length; contador++){
    var paciente = pacientes[contador];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var trImc = paciente.querySelector(".info-imc");

    var alturaEhValida = true;
    var pesoEhValido = true;


    if(peso <= 0 || peso >= 800){
        trImc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3){
        trImc.textContent = "Altura Inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura);

        trImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso, altura).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.nome.value = "";
    form.peso.value = "";
    form.altura.value = "";
    form.gordura.value = "";

});

function calculaImc(peso, altura) {

    if(peso <= 0 || peso >= 800){
        return "Peso Invalido!";
    }
    if(altura <= 0 || altura >= 3){
        return "Altura Inválida!";
    }

    return peso / (altura * altura);

}