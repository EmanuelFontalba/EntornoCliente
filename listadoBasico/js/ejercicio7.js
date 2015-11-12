/*
Emanuel Galván Fontalba 
. Implementa Decena que solicite un número entre 0 y 10 (9,76876) e indique:
a. Cuántas cifras tiene (7 cifras)
b. Lo muestre del revés
*/

function contar(){
	var numero = document.getElementById("num").value;
	var numArray = numero.split(",");
	var contador = 0;
	var elemento = document.getElementById("resultado");
	if(numArray[0].length>1){
		elemento.innerHTML = "<h1>ERROR!! Introduce un número del 0 al 10</h1>";
	}else{
		for(var i=0;i<numArray.length;i++){
			contador+=numArray[i].length;
		}
		elemento.innerHTML = "<h1>Tiene "+contador+" cifras.</h1>";
	}
}

window.onload=function(){
	document.getElementById("contar").addEventListener("click", contar);
}