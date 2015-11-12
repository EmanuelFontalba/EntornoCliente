function diaSemana(index){
	switch(index){
		case 0: return "Lunes";
		case 1: return "Martes";
		case 2: return "Miercoles";
		case 3: return "Jueves";
		case 4: return "Viernes";
		case 5: return "Sabado";
		case 6: return "Domingo";
	}
}
window.onload=function(){
	var otraVentana = window.open("http://www.iesgrancapitan.org/portal/","granCapitan","toolbar=yes,location=no,menubar=yes,resizable=yes,width=800,height=600");
		var cadenaHtml = ""+
		"<form>"+
			"Nombre y apellidos: <input id='nombre' type='text'><br/>"+
			"Dia nacimiento: <input id='dia' type='text'><br/>"+
			"Mes nacimiento: <input id='mes' type='text'><br/>"+
			"Año nacimiento: <input id='anno' type='text'><br/>"+
			"<input id='imprime' type='button' value='Imprimir'><br/>"+
		"</form>";


		document.getElementById('formulario').innerHTML = cadenaHtml;
		document.getElementById("imprime").addEventListener("click", function imprimeDatos(){
		var nombre = document.getElementById("nombre").value;
		var dia = document.getElementById("dia").value;
		var mes = document.getElementById("mes").value;
		var anno = document.getElementById("anno").value;
		var cadena="Buenos dias ";
		var fechaActual = new Date();
		var fechaNacimient = new Date(anno, mes, dia);
		var edad = (fechaActual - fechaNacimient)/1000/60/60/24/365;
		edad = parseInt(edad);
		var numeros = [65,22,69,99,12];
		var numMayor = 0;




		cadena+=nombre+"<br/>";
		cadena+="Tu nombre tiene "+nombre.length+" caracteres, incluidos espacios.<br/>";
		cadena+="La primera letra E de tu nombre está en la posición "+nombre.toLowerCase().indexOf("e")+"<br/>";
		cadena+="La ultima letra E de tu nombre está en la posición "+nombre.toLowerCase().lastIndexOf("e")+"<br/>";
		cadena+="Tu nombre menos las 3 primeras letras es "+nombre.slice(2,(nombre.length-1))+"<br/>";
		cadena+="Tu nombre en mayusculas es "+nombre.toUpperCase()+"<br/>";
		cadena+="Tienes "+edad+" años.<br/>";
		cadena+="Naciste un feliz "+mes+" del año "+anno+". No te acuerdas pero era "+diaSemana(fechaNacimient.getDay())+".<br/>";
		cadena+="El coseno de 90 es: "+Math.cos(90)+".<br/>";
		numeros.forEach(function mayor(element, index, array){
			if(element>numMayor){
				numMayor=element;
			}
		});
		cadena+="El numero mayor de (65,22,69,99,12) es: "+numMayor+"<br/>";
		cadena+="Ejemplo de número aleatorio entre 1 y 10: "+parseInt(Math.random()*10)+"<br/>";
		
		opener.document.getElementById("resultado").innerHTML=cadena;
	});
}