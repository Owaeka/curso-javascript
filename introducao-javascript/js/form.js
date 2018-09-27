var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    console.log(form);

    var paciente = criaPacientePeloForm(form);
    console.log(paciente);

    var pacienteTr = montaTr(paciente);
    console.log(pacienteTr);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

   form.reset();

});