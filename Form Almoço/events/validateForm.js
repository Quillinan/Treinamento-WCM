function validateForm(form){
	
	const campos = ["nome", "email", "restaurante"]
	
	if (form.getValue(campos[0]) == "" ) {
        throw new Error("O campo " + campos[0] + " não foi preenchido");
    };
    
    if (form.getValue(campos[1]) == "" ) {
        throw new Error("O campo " + campos[1] + " não foi preenchido");
    };
    
    if (form.getValue(campos[2]) == "" ) {
        throw new Error("Nenhum " + campos[2] + " foi selecionado");
    };
     
}

