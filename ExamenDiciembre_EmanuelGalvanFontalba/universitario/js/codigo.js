window.addEventListener("load", function(){
	document.getElementById("nombre").value=localStorage.getItem("Nombre");
	document.getElementById("apellido1").value=localStorage.getItem("ap1");
	document.getElementById("apellido2").value=localStorage.getItem("ap2");
	document.getElementById("fecha").value=localStorage.getItem("fecha");

	var limpiar = document.getElementById("limpiar");
	var crear = document.getElementById("crear");

	limpiar.addEventListener("click", function(){
		document.getElementById("nombre").value="";
		document.getElementById("apellido1").value="";
		document.getElementById("apellido2").value="";
		document.getElementById("fecha").value="";
		document.getElementById("terminos").checked=false;
		localStorage.removeItem("Nombre");
		localStorage.removeItem("ap1");
		localStorage.removeItem("ap2");
		localStorage.removeItem("fecha");
	});

	crear.addEventListener("click", function(){
		var nombre = document.getElementById("nombre");
		var ap1 = document.getElementById("apellido1");
		var ap2 = document.getElementById("apellido2");
		var fecha = document.getElementById("fecha");
		var terminos = document.getElementById("terminos");
		var lerror=false;

		if(nombre.value == ""){
			document.getElementById("eNombre").style = "display : inline";
			lerror=true;
		}else{
			document.getElementById("eNombre").style = "display : none";
		}

		if(ap1.value == ""){
			document.getElementById("eAp1").style = "display : inline";
			lerror=true;
		}else{
			document.getElementById("eAp1").style = "display : none";
		}

		if(ap2.value == ""){
			document.getElementById("eAp2").style = "display : inline";
			lerror=true;
		}else{
			document.getElementById("eAp2").style = "display : none";
		}

		if(fecha.value == ""){
			document.getElementById("eFecha").style = "display : inline";
			lerror=true;
		}else{
			document.getElementById("eFecha").style = "display : none";
		}

		if(!terminos.checked){
			document.getElementById("eTerms").style = "display : inline";
			lerror=true;
		}else{
			document.getElementById("eTerms").style = "display : none";
		}

		if(!lerror){
			try{
				var universitario = new Universitario(nombre.value, ap1.value, ap2.value, fecha.value);
				universitario.mostrar();
				localStorage.setItem("Nombre", nombre.value);
				localStorage.setItem("ap1", ap1.value);
				localStorage.setItem("ap2", ap2.value);
				localStorage.setItem("fecha", fecha.value);
			}catch(e){
				var eFecha = document.getElementById("eFecha");
				eFecha.style ="display: inline";
				eFecha.innerHTML = "*"+e;
			}
		}
	});
});