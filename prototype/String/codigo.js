function init(){
	String.prototype.truncar = function(index, element){
		var sustituir = false;
		if(element !== undefined){
			sustituir = true;
		}

		if(index<0){
			console.error("Valor de índice no válido");
			return;
		}

		if(sustituir){
			return this.substring(0, index)+element;
		}else{
			return this.substring(0, index);
		}
	}

	var cadena = "Hola soy una prueba.";
	console.log("Cadena original: ");
	console.log(cadena);
	console.log("Cadena truncada (4) sin sustituir ( element = undefined):");
	console.log(cadena.truncar(4));
	console.log("Cadena truncada con un índice invalido (-1): ");
	console.log(cadena.truncar(-1));
	console.log("Cadena truncada (3) con sustitucion ( element = 'Emanuel está aquí'):");
	console.log(cadena.truncar(3,"Emanuel está aquí"));
}

window.addEventListener("load", init);