/*
Emanuel Galván Fontalba
Implementa ComprobacionHora que solicite los segundos, minutos y hora e indique si
es correcta. Si lo fuera, ha de mostrar la hora un segundo después.
*/

var horaMostrar;

function comprobar(){
	var hora = parseInt(document.getElementById("hora").value);
	var minuto = parseInt(document.getElementById("minuto").value);
	var seg = parseInt(document.getElementById("seg").value);
	var lerror = false;
	var elemento = document.getElementById("resultado");
	

	if(hora<=24&&hora>=0&&minuto<=60&&minuto>=0&&seg<=60&&seg>=0){
		lerror=false;
	}else{
		lerror=true;
	}

	if(!lerror){
		hora++;
		
		horaMostrar=new Date(2015, 11, 10, hora, minuto, seg);

		elemento.innerHTML = "<p>"+horaMostrar.getHours()+":"+horaMostrar.getMinutes()+":"+horaMostrar.getSeconds();
	}else{
		elemento.innerHTML = "Revisa la hora introducida, no es válida.";
	}
}

window.onload=function(){
	document.getElementById("comprobar").addEventListener("click", comprobar);
}