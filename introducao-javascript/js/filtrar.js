var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
    var expressao = new RegExp(this.value,"i");
    console.log(pacientes);
    console.log(expressao);
    if (!expressao.test(nome)) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];            
            paciente.classList.add("invisivel");    
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});