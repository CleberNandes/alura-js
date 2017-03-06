function calculaImc(){
	var pacienteLista = document.getElementsByClassName("paciente");
	
	percorreArray(pacienteLista, imprimeEModificaImc);

	function imprimeEModificaImc(pacienteGet){

		var paciente = montaPaciente(pacienteGet);
		var imc = paciente.pegaImc();
		var tdImc = pacienteGet.getElementsByClassName("info-imc")[0];


		tdImc.textContent = imc;
		console.log(imc);

	}
	function montaPaciente(pacienteGet){

		var nome = pacienteGet.getElementsByClassName("info-nome")[0];
	 	var peso = pacienteGet.getElementsByClassName("info-peso")[0];
	 	var altura = pacienteGet.getElementsByClassName("info-altura")[0];

	 	var paciente = {"nome" : nome.textContent , 
	 									"peso" : peso.textContent , 
	 									"altura" : altura.textContent,
	 									pegaImc : function(){
	 										if(this.altura != 0){
												var imc = this.peso / (this.altura*this.altura);
												return imc;
												console.log("O imc é "+imc);
											} else {
												console.log("Altura é igual a zero!!!")
											}
	 									}};
	 	return paciente;
	}
}
var botao = document.getElementById("calcula-imcs");
botao.addEventListener("click",calculaImc);
botao.addEventListener("click", function(){
	console.log("Inventando historia")
});


