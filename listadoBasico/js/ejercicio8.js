/*
Emanuel Galván Fontalba
8. Implementa ComprobacionFecha que solicite el día, el mes y el año e indique si la
fecha es correcta. Si lo fuera, ha de mostrar el día después
*/

function comprobar(){
	var dia = document.getElementById("dia").value;
	var mes = document.getElementById("mes").value;
	var anno = document.getElementById("anno").value;
	var elemento = document.getElementById("resultado");
	var lerror = false;

	if(dia>31){lerror=true;}
	if(mes>12){lerror=true;}

	if(!lerror){
		dia++;
		var fecha = new Date(anno, (mes-1), dia);
		elemento.innerHTML="<p>"+fecha+"</p>";
	}else{
		elemento.innerHTML="Tienes algun error en la fecha introducida, revisalo por favor";
	}
}

window.onload=function(){
	document.getElementById("comprobar").addEventListener("click", comprobar);
}