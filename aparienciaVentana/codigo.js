window.addEventListener("load", function(){
	document.getElementById("abrirVentana").addEventListener("click", function(){
		var nuevaVentana = window.open("","ventanaNueva","toolbar=yes,location=no,menubar=yes,resizable=yes,width=300,height=200,top=0,left=0");
		nuevaVentana.document.open();
		nuevaVentana.document.write(
			"<html>"+
				"<head>"+
					"<meta charset='utf-8'>"+
					"<title>Ventana de prueba</title>"+
				"</head>"+
				"<body>"+
					"<p>Se han utilizado las siguiente propiedades:</p>"+
					"<ul>"+
						"<li>height=200</li>"+
						"<li>width=300</li>"+
					"</ul>"+
				"</body>"+
			"</html>"
			);
	});
});