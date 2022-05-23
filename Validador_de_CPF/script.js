console.log("Javascript carregado");

function validaCPF(cpf) {
	console.log(cpf.length);
	if (cpf.length != 11) {
		return false;
	} else {
		var numeros = cpf.substring(0, 9);
		var digitos = cpf.substring(9);

		console.log("numeros do cpf " + numeros);
		console.log("digito do cpf " + digitos);
		
		return true;
	}
}

function validacao() {
  	console.log("Iniciando validaçõa de CPF");

	var cpf = document.getElementById("cpf_digitado").value;
	
	var resultadoValidacao = validaCPF(cpf);

	if (resultadoValidacao) {
		document.getElementById("success").style.display = "block";
	} else {
		document.getElementById("error").style.display = "block";
	}

}