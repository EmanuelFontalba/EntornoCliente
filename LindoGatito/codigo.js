window.addEventListener("load", function(){
	//Objeto gatito
	function Gato(name, dia, mes, anno, raza, peso){
		this.nameCat= name;
		this.fecha = new Date(anno, mes, dia);
		this.raza = raza;
		this.peso = peso;
		this.state = "Jugando";
		
		this.validate(dia,mes);
		
	}

	Gato.prototype.validate = function(dia,mes){
		//Errores del nombre
		if(typeof this.nameCat != typeof "Gato"){
			throw new Error("ERROR: El nombre de tu gato solo puede ser texto");
		}

		//Errores de la fecha
		if(dia!=parseInt(this.fecha.getDate()) || mes!=parseInt(this.fecha.getMonth())){
			throw new Error("ERROR: Fecha de nacimiento no válida");
		}

		//Errores de la raza
		if(typeof this.raza != typeof "raza"){
			throw new Error("ERROR: La raza del gato solo puede ser texto");
		}

		//Errores del peso
		if(typeof this.peso != typeof 1){
			throw new Error("ERROR: El peso del gato solo puede ser un valor numérico");
		}else if (this.peso < 1) {
			throw new Error("ERROR: El peso del gato no puede ser menor de 1");
		}else if (this.peso > 15) {
			throw new Error("ERROR: El peso del gato no puede ser mayor de 15");
		}
	}

	Gato.prototype.jugando = function(){
		this.peso-=1;
		if(this.peso<1){
			this.state ="Muerto";
		}else{
			this.state = "Jugando";
		}
	}

	Gato.prototype.durmiendo = function(){
		this.state = "Durmiendo";
	}

	Gato.prototype.comiendo = function(){
		this.peso+= 2;
		if(this.peso>25){
			this.state = "Muerto";
		}else{
			this.state = "Comiendo";
		}
	}

	Gato.prototype.changeState = function(){
		switch(this.state){
			case "Jugando":
				this.durmiendo();
				break;
			case "Durmiendo":
				this.comiendo();
				break;
			case "Comiendo":
				this.jugando();
				break;
			case "Muerto":
				break;
			default:
				throw new Error("ERROR: Tu gato se ha puesto malito");
				break;
		}
	}

		//Getters
	Gato.prototype.getFecha = function(){
		return this.fecha;
	}

	Gato.prototype.getNameCat = function(){
		return this.nameCat;
	}

	Gato.prototype.getRaza = function(){
		return this.raza;
	}

	Gato.prototype.getPeso = function(){
		return this.peso;
	}

	Gato.prototype.getState = function(){
		return this.state;
	}

	//Fin de objeto gatito

	function abrirVentana(variable){
	
	}


	document.getElementById("crear").addEventListener("click", function(){
		var nombre = document.getElementById("name").value;
		var diaNac = parseInt(document.getElementById("diaNac").value);
		var mesNac = parseInt(document.getElementById("mesNac").value);
		var annNac = parseInt(document.getElementById("annNac").value);
		var raza   = document.getElementById("raza").value;
		var peso   = parseInt(document.getElementById("peso").value);
		var error  = document.getElementById("error");

		try{
			var gato   = new Gato(nombre, diaNac, mesNac, annNac, raza, peso);
			var propiedades="toolbar=yes,location=no,menubar=yes,resizable=yes,width=800,height=600,top=20,left=20";
			var nuevaVentana = window.open("","",propiedades);
				nuevaVentana.document.open();
				nuevaVentana.document.write(
					"<html>"+
						"<head>"+
							"<meta charset='utf-8'>"+
							"<title>Ventana de prueba</title>"+
							"<script type='text/javascript' src='codigo_1.js'></script>"+
							"<link rel='stylesheet' type='text/css' href='css.css'"+
						"</head>"+
						"<body>"+
							"<div id='info'></div>"+
							"<div id='state'></div>"+
							"<br/><input type='button' id='change' value='Cambiar estado.'>"+
						"</body>"+
					"</html>"
					);
				nuevaVentana.gatoHijo = gato;
				nuevaVentana.document.close();
		}catch(e){
			error.innerHTML = e;
		}
	});


	
});