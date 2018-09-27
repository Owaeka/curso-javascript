var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var contador=0; contador < pacientes.length; contador++){
    var paciente = pacientes[contador];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var trImc = paciente.querySelector(".info-imc");

    var alturaEhValida = validaaltura(altura);
    var pesoEhValido = validaPeso(peso);


    if(!validaPeso){
        trImc.textContent = "Peso Inválido";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(!validaAltura){
        trImc.textContent = "Altura Inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    if(alturaEhValida && pesoEhValido){
        var imc = peso / (altura*altura);

        trImc.textContent = imc.toFixed(2);
    }
}