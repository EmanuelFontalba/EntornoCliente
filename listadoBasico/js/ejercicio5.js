/*
Emanuel Galván Fontalba
5. Implenta NumerosPrimosEnSecuencia que pida un número e indique cuántos números
primos existen entre el 1 y dicho número.
*/
var numero;

function comprobar(){
	numero = document.getElementById("num").value;
	var elemento= document.getElementById("resultado");
	var contador = 0;

	for(var sec = numero; sec>0; sec--){
		if(esPrimo(sec)){
			contador++;
		}
	}

	elemento.innerHTML="En la secuencia de numeros habia "+contador+" numeros primos.";
}

function esPrimo(numero){
	for(var i = (numero-1); i>1; i--){

		if((numero%i)==0){
			return false;
		}
		
	}
	return true;
}

window.onload=function(){
	document.getElementById("comprobar").onclick=comprobar;
}