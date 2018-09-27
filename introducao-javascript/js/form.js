var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    //Reseta mensagens de erro
    document.querySelector("#mensagens-erro").innerHTML = "";
    //Previne que o botão faça a ação normal
    event.preventDefault();
    //Seleciona o FORM
    var form = document.querySelector("#form-adiciona");
    //Cria paciente através do form
    var paciente = criaPacientePeloForm(form);
    //Valida o paciente
    var validacao = validaPaciente(paciente);
    console.log(paciente.peso);
    //Se não tiver erros, executa a inseração do paciente
    if(validacao.length == 0){
        //Monta a TR do paciente
        var pacienteTr = montaTr(paciente);
        //Seleciona a tabela para inserir
        var tabela = document.querySelector("#tabela-pacientes");
        //Insere as tags trs com as tds
        tabela.appendChild(pacienteTr);

   form.reset();
    } else{ //Caso tenha algum erro, exibe mensagem de verificação
        msgErro(validacao);
    }
    

});

