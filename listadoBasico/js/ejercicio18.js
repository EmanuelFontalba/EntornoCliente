/*
Emanuel Galván Fontalba
. Implementa PorLineas que visualice los números del 0 al 100 separados por comas.
Cada múltiplo de 7 ha de comenzar en una línea nueva.
*/
window.onload=function(){
	document.open();
	for(var i=0; i<=100; i++){
		document.write(""+i+",");
		if(i%7==0){
			document.write("<br/>");
		}
	}
	document.close();
}