/*
Emanuel Galván Fontalba
. Implementa CerosYUnos que lea una secuencia de ceros y unos. Mostrará el número
de ceros de la secuencia. Dejará de leer cuando el usuario introduzca el número 2.
*/
var array = [0];
var contador = -1;
var elemento;

function capturar(){
	var numero = document.getElementById("num").value;
	var expr = /0|1|2/;

	if(expr.exec(numero)){
		var num = parseInt(numero);
		if(num!=2){
			array.push(num);
		}else{
			contarCeros();
			//array = [0];
			elemento.innerHTML="<p>Los ceros introducidos son: "+
				contador+".</p>";
		}
	}else{
		elemento.innerHTML="Introduce un 0, un 1 o un 2";
	}
}

function contarCeros(){
	for(var i = 0; i<array.length; i++){
		if(array[i]==0){
			contador++;
		}
	}
}

window.onload=function(){
	elemento=document.getElementById("resultado");
	document.getElementById("captura").addEventListener("click", capturar);
}