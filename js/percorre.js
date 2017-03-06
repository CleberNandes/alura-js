function percorreArray(pacienteLista, comportamento){
	for(var count = 0; count < pacienteLista.length; count++){

		var paciente = pacienteLista[count];
		comportamento(paciente);

	}
}