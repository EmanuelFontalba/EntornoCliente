/*
Emanuel Galván Fontalba
2. Implementa DeSieteEnSiete que escriba los números del 100 al 0 de 7 en siete
*/
var numero = 0;

window.onload=function(){
	var elemento = document.getElementById("contaje");
	var insercion = "";

	while(numero<=100){
		insercion+="<p>"+numero+"</p>";
		numero+=7;
	}

	elemento.innerHTML = insercion;
}