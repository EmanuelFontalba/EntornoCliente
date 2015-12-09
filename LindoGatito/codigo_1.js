var gatoHijo;
window.addEventListener("load", function(){
	var stateImg = document.getElementById("state");
	var info = document.getElementById("info");

	function refreshInfo(){
		var informacion = "Nombre: "+gatoHijo.getNameCat()+"<br/>"+"Fecha de nacimiento: "+gatoHijo.getFecha()+"<br/>"+"Raza: "+gatoHijo.getRaza()+"<br/>"+"Peso: "+gatoHijo.getPeso()+"<br/>";
		info.innerHTML = informacion;
		var ruta;
		switch (gatoHijo.getState()){
			case "Jugando":
				ruta="img/jugando.jpg";
				break;
			case "Durmiendo":
				ruta="img/durmiendo.jpg";
				break;
			case "Comiendo":
				ruta="img/comiendo.jpg";
				break;
			case "Muerto":
				ruta="img/muerto.jpg";
			default:
				break;
		}
		stateImg.innerHTML = "<img src='"+ruta+"'/>";
	}

	refreshInfo();
	document.getElementById("change").addEventListener("click",function(){
		gatoHijo.changeState();
		refreshInfo();
	});

});

