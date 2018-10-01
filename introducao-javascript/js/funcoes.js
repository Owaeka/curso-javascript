

function calculaImc(peso, altura) {

    if(!validaPeso(peso)){
        return "Peso Invalido!";
    }
    if(!validaAltura(altura)){
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
    if(peso <= 0 || peso >= 800) return false;

    else return true;
}

function validaAltura(altura) {
    if(altura <= 0 || altura >= 3.0) return false;

    else return true;
}


function validaPaciente(paciente){
    erros = [];

    if(paciente.nome.length == 0) erros.push("Nome não pode ser branco");
    if(paciente.altura.length == 0) erros.push("Altura não pode ser em branco");
    if(paciente.gordura.length == 0) erros.push("Gordura não pode ser em branco");
    if(paciente.peso.length == 0) erros.push("Peso não pode ser em branco");

    if(!validaPeso(paciente.peso)) erros.push("Peso inválido");
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida");

    return erros;
}

function msgErro(mensagens) {
    var ul = document.querySelector("#mensagens-erro");

    mensagens.forEach(mensagem => {
        var li = document.createElement("li");
        li.textContent = mensagem;
        ul.appendChild(li);
    });
}


function adicionaPacienteNaTabela(paciente) {
    //Monta a TR do paciente
    var pacienteTr = montaTr(paciente);
    //Seleciona a tabela para inserir
    var tabela = document.querySelector("#tabela-pacientes");
    //Insere as tags trs com as tds
    tabela.appendChild(pacienteTr);
}