
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(event){

	// impede o padrao do botao de ser executado
	event.preventDefault();

	// query.Selector pega o valor inserido no input pelo ususario
	var nome = document.querySelector("#campo-nome");
	var peso = document.querySelector("#campo-peso");
	var altura = document.querySelector("#campo-altura");



	var pacienteNovo = "<tr class='paciente'>"+
		 										"<td class='info-nome'>"+nome.value+"</td>"+
												"<td class='info-peso'>"+peso.value+"</td>"+
												"<td class='info-altura'>"+altura.value+"</td>"+
												"<td class='info-imc'></td>"+
										 "</tr>";

	document.getElementsByTagName("table")[0];	
	var tabela = document.querySelector("table");	
	// innerHTML diferente do textContent pega a estrutura html em vez do texto	
	tabela.innerHTML = tabela.innerHTML +	pacienteNovo;	

	// limpa os inputs inseridos por último
	nome.value = "";
	peso.value = "";
	altura.value = "";

});