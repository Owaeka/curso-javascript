var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var contador=0; contador < pacientes.length; contador++){
    var paciente = pacientes[contador];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var trImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        trImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValida){
        trImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura);

        trImc.textContent = imc.toFixed(2);
    }
}