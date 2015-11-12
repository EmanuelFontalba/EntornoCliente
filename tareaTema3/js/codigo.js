var ventanaNueva;

function accionesPrimeraVentana(){
	ventanaNueva.document.open();
	var javaDisponible;
	if(window.navigator.javaEnabled()){
		javaDisponible="Java SI está disponible en el navegador";
	}else{
		javaDisponible="Java NO está disponible en el navegador";
	}
	ventanaNueva.document.write(
		"<html>"+
			"<head>"+
				"<meta charset='utf-8'>"+
				"<title></title>"+
				"<script type='text/javascript' src='js/codigoVentanaNueva.js'></script>"+
			"</head>"+
			"<body>"+
				"<br/><h1>Ventana nueva</h1>"+
				"<br/>URL Completa: "+window.location.href+
				"<br/>Protocolo: "+window.location.protocol+
				"<br/>Nombre en código del navegador: "+window.navigator.userAgent+
				"<br/>"+javaDisponible+
				"<br/><div id='formulario'></div>"+
			"</body>"+
		"</html>"
	);
	ventanaNueva.document.close();
}

window.onload=function(){
	ventanaNueva = window.open("","ventanaNueva","toolbar=yes,location=no,menubar=yes,resizable=yes,width=400,height=400");
	accionesPrimeraVentana();
	window.document.open();
	window.document.write(
		"<html>"+
			"<head>"+
				"<meta charset='utf-8'>"+
				"<script type='text/javascript'></script>"+
			"</head>"+
			"<body>"+
				"<h1>Tarea del tema 3</h1>"+
				"<div id='resultado'></div>"+
			"</body>"+
		"</html>"
		);
	var cadenaHtml = ""+
		"<form>"+
			"Nombre y apellidos: <input id='nombre' type='text'><br/>"+
			"Dia nacimiento: <input id='dia' type='text'><br/>"+
			"Mes nacimiento: <input id='mes' type='text'><br/>"+
			"Año nacimiento: <input id='anno' type='text'><br/>"+
			"<input id='imprime' type='button' value='Imprimir'><br/>"+
		"</form>";
	
}