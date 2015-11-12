/*
Emanuel Galván Fontalba
4. Implenta NumeroPrimo que pida un número e indique si es primo o no
*/
function comprobar(){
	var numero = document.getElementById("num").value;
	var primo = true;
	var elemento= document.getElementById("resultado");

	for(var i = (numero-1); i>1; i--){

		if((numero%i)==0){
			primo=false;
		}
		
	}

	

	if(primo){
		elemento.innerHTML = "El número "+numero+" es primo.";
	}else{
		elemento.innerHTML = "El número "+numero+" no es primo.";
	}
}

window.onload=function(){
	document.getElementById("comprobar").onclick=comprobar;
}