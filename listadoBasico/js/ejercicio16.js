/*
Emanuel Galván Fontalba
Implementa Pirámide que mediante un bucle for visualice una pirámide del siguiente
tipo:
1
22
333
4444
55555 ... 9999999*/

window.onload=function(){
	document.open();
	for(var i=1; i<10; i++){
		for(var z=0; z<i; z++){
			document.write(""+i);
		}
		document.write("<br/>");
	}
	document.close();
}