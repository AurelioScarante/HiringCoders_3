console.log("Javascript carregado");

function validaCPF(cpf) {
	console.log(cpf.length);
	if (cpf.length != 11) {
		return false;
	} else {
		
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