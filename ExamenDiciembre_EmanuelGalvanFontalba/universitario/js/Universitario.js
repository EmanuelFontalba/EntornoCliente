function Universitario(nombre, ap1, ap2, fecha){
	if(this.fechaValida(fecha)){
		var aFecha = fecha.split("-");
		this.nombre=nombre;
		this.ap1=ap1;
		this.ap2=ap2;
		this.fecha = new Date(aFecha[2], aFecha[1], aFecha[0]);
	}else{
		throw "La fecha no es correcta";
	}
}

Universitario.prototype.fechaValida = function (fecha){
	if(/^\d{2}-\d{2}-\d{4}$/.test(fecha)){
		var aFecha = fecha.split("-");
		var f = new Date(aFecha[2], aFecha[1], aFecha[0]);
		if(f.getDate() != parseInt(aFecha[0]) || f.getMonth() != parseInt(aFecha[1]) || f.getFullYear() != parseInt(aFecha[2])){
			return false;
		}
		return true;
	}else{
		return false;
	}	
}

Universitario.prototype.calculaEdad = function(){
	var actual = new Date();
	var edad = actual-this.fecha;
	edad = Math.floor(edad / 1000 / 60 / 60 / 24 / 365);
	return edad;
}

Universitario.prototype.mostrar = function(){
	var ventana = window.open("", "Universitario", "directories=no, location=no, menubar=no, scrollbars=yes, statusbar=no, tittlebar=no, width=400, height=400");
	ventana.document.write("<html><head><title>Universitario</title></head>"+
		"<body>Nombre: "+this.nombre+"<br>"+
		"Apellido 1: "+this.ap1+"<br>"+
		"Apellido 2: "+this.ap2+"<br>"+
		"Edad: "+this.calculaEdad()+"<br></body></html>");
}