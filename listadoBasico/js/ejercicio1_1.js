var html="<html><head><meta charset=utf-8>"+
"<title>Ejercicio 1</title><script type='text/javascript'"+
"src='../js/ejercicio1.js'></script></head><body><form>"+
"Introduce un numero: <input id='numeroUsr' type='text'/ value=''>"+
"</br><input id='comprobar' type='button' value='Comprobar'></form>"+
"<div id='resultado'></div></body></html>";

function volverAjugar(){
	document.write(html);
	document.close();
}

function cerrar(){
	window.close();
}
window.onload=function(){
	document.getElementById("si").onclick=volverAjugar;
	document.getElementById("no").onclick=cerrar;
}
