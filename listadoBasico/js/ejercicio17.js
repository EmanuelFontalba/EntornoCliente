/*
Emanuel Galván Fontalba
. Implementa PiramideDos que mediante un bucle for visualice una pirámide del
siguiente tipo:
1
12
123
1234
12345
123456
1234567
*/

window.onload=function(){
	document.open();
	for(var i=1; i<10; i++){
		for(var z=1; z<=i; z++){
			document.write(""+z);
		}
		document.write("<br/>");
	}
	document.close();
}