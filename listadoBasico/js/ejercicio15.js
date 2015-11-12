/*
Emanuel Galván Fontalba
. Implementa MuestraDelUnoAlN que pida un número entero y que muestre la
secuencia del 1 al número indicado. En caso de no poder generarse la secuencia
(menor que 1), que lo indique
*/

var num;
var cadena = "";
var elemento;

function mostrarSecuencia(){
	numero = document.getElementById("num").value;
	var expr = /\d+/;

	if(expr.exec(numero)){
		num = parseInt(numero);
		if(num>0){
			annadeACadena();
			elemento.innerHTML="<p>La secuencia es: "+cadena+"</p>";
		}else{
			elemento.innerHTML="No se puede generar la secuencia.";
		}
	}else{
		elemento.innerHTML="Introduce un numero";
	}
}

function annadeACadena(){
	for(var i = 0; i<=numero; i++){
		cadena+=i+", ";
	}
}

window.onload=function(){
	elemento=document.getElementById("resultado");
	document.getElementById("captura").addEventListener("click", mostrarSecuencia);
}