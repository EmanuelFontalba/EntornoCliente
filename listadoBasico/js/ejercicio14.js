/*
Emanuel Galván Fontalba
Implementa CalculaMedia que pida números hasta que se introduzca uno negativo.
Entonces, que muestre la media.
*/
var array = [0];
var media = 0;
var elemento;

function capturar(){
	var numero = document.getElementById("num").value;
	var expr = /\d+/;

	if(expr.exec(numero)){
		var num = parseInt(numero);
		if(num>=0){
			array.push(num);
		}else{
			calcularMedia();
			//array = [0];
			elemento.innerHTML="<p>La media de los números introducidos es: "+
				media+".</p>";
		}
	}else{
		elemento.innerHTML="Introduce un numero";
	}
}

function calcularMedia(){
	var suma = 0;
	for(var i = 0; i<array.length; i++){
		suma+=array[i];
	}
	media = suma/array.length;
}

window.onload=function(){
	elemento=document.getElementById("resultado");
	document.getElementById("captura").addEventListener("click", capturar);
}