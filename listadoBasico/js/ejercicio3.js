/*
Emanuel Galván Fontalba
3. Implementa MultiplosDeCinco que pida 7 números e indique si alguno es múltiplo de
5.
*/

var numeros = new Array();
var multiplos = new Array();
var elemento;

function comprobar(){
	numeros.push(document.getElementById("num1").value);
	numeros.push(document.getElementById("num2").value);
	numeros.push(document.getElementById("num3").value);
	numeros.push(document.getElementById("num4").value);
	numeros.push(document.getElementById("num5").value);
	numeros.push(document.getElementById("num5").value);
	numeros.push(document.getElementById("num7").value);


	for(var i=0; i<numeros.length; i++){
		if(numeros[i]%5 == 0){
			multiplos.push(numeros[i]);
		}
	}

	if(multiplos.length == 0){
		elemento.innerHTML = "<h1>No hay multiplos de 5</h1>";
	}
	else{
		var mult = "";
		for(var z=0; z<multiplos.length; z++){
			mult+=multiplos[z]+"</br>";
		}
		elemento.innerHTML = "<h1>Los multiplos de 5 son: </h1> <p>"+
							  mult+"</p>";
	}
}

window.onload=function(){
	elemento = document.getElementById("resultado");
	document.getElementById("comprobar").onclick=comprobar;
}