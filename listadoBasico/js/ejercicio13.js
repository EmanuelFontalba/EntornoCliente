/*
Emanuel Galván Fontalba
. Implementa ProductoPotencias que calcule y visualice el producto de las potencias de
2 entre 0 y 10.
*/

window.onload=function(){
	var producto=1;
	for(var i=1; i<=10;i++){
		producto*=Math.pow(i,2);
	}
	document.getElementById("resultado").innerHTML="El producto de las potencias es:"+
		producto+".";
}