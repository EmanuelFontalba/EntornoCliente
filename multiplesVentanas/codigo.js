//var nuevaVentana = new Array();
function abrirVentana(variable){
	var tam = (variable*20).toString();
	var propiedades="toolbar=yes,location=no,menubar=yes,resizable=yes,width=300,height=200,top="+tam+",left="+tam;
	var nuevaVentana = window.open("","",propiedades);
		nuevaVentana.document.open();
		nuevaVentana.document.write(
			"<html>"+
				"<head>"+
					"<meta charset='utf-8'>"+
					"<title>Ventana de prueba</title>"+
					"<script type='text/javascript' src='codigo_1.js'></script>"+
				"</head>"+
				"<body>"+
					"Ventana "+variable+":"+
						"<input id='cerrar' type='button' value='cerrar'>"+
				"</body>"+
			"</html>"
			);
		nuevaVentana.document.close();
}

window.addEventListener("load", function(){
	document.getElementById("abrirVentana").addEventListener("click", function(){
		for(var i=0; i<5; i++){
			abrirVentana(i);
		}
	});
});