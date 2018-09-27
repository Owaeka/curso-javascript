function calculaImc(peso, altura) {

    if(peso <= 0 || peso >= 800){
        return "Peso Invalido!";
    }
    if(altura <= 0 || altura >= 3){
        return "Altura Inválida!";
    }

    return (peso / (altura * altura)).toFixed(2);

}

function criaPacientePeloForm(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPeso(peso) {
    if(peso <=0 || peso >=800){
        return true;
    }
    return false;
}

function validaAltura(altura) {
    if(altura <=0 || altura >=3.0){
        return true;
    }
    return false;
}