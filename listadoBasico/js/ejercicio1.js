/*
Emanuel Galván Fontalba
1. Implementa el juego “Adivínalo”. Consiste en que el usuario ha de adivinar un número
entre el 1 y el 100. Mostrará un mensaje:
a. Para indicar si has acertado (en una nueva ventana)
b. Para indicar si la solución es mayor o es menor.
Al finalizar, se le preguntará al usuario si quiere repetir el juego.
*/
var aleatorio;
var ventana;
var html = "<html><head><meta charset='utf-8'><title>Ejercicio 1</title>"+
		"<script type='text/javascript' src='../js/ejercicio1_1.js'></script>"+
		"</head><body><h1>Has acertado!</h1></br><form>¿Quieres jugar de nuevo?"+
		"<input id='si' type='button' value='Si'><input id='no' type='button' value='No'>"+
		"</form></body></html>";

function nuevaVentana(){
	ventana=ventana = window.open("","Hola","toolbar=yes,location=no,menubar=yes,resizable=yes,width=330,height=330");
}

function generaAleatorio(){
	aleatorio = Math.round(Math.random()*100);
}

function comprueba(){
	var numUsuario = document.getElementById("numeroUsr").value.toString();
	var elemento = document.getElementById("resultado");

		if (numUsuario>aleatorio){
			elemento.innerHTML="<h2>El numero tiene que ser menor</h2>";
		}else
		if (numUsuario<aleatorio){
			elemento.innerHTML="<h2>El numero tiene que ser mayor</h2>";
		}
		else{
			nuevaVentana();
			ventana.document.write(html);
			ventana.document.close();
		}

}

window.onload=function(){
	generaAleatorio();

	document.getElementById("comprobar").onclick=comprueba;
	console.log(aleatorio);
}


