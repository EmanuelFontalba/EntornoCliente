function init(){
	var canvas = document.getElementById("lupa");
	var context = canvas.getContext("2d");
	window.addEventListener("resize",resizeCanvas,false);

	function resizeCanvas(){
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function cargarContext(idCanvas){
		var elemento = document.getElementById(idCanvas);
	    if(elemento && elemento.getContext){
	        var context = elemento.getContext('2d');
	        if(context){
	            return context;
	        }
	    }
	    return false;
	}

	function dibujaLupa(idCanvas){
		context=cargarContext(idCanvas);
		if(context){
			//CirculosLupa
				//circulo grande
			context.beginPath();
			context.fillStyle="rgb(110,110,110)";
			context.arc(10, 10, 8, 0, 2 * Math.PI, true);
			context.fill();
				//palito
			context.beginPath();
			context.lineWidth=3;
			context.strokeStyle="rgb(110,110,110)";
			context.moveTo(14,13);
			context.lineTo(23,21);
			context.stroke();
				//circulo pequeño
			context.beginPath();
			context.fillStyle="rgb(60,187,254)";
			context.arc(10, 10, 5, 0, 2 * Math.PI, true);
			context.fill();
				
		}else{
			console.error("No se ha podido cargar el contexto de canvas.");
		}
	}

	function dibujamenu(idCanvas){
		context=cargarContext(idCanvas);
		if(context){
			context.beginPath();
			context.fillStyle="rgb(110,110,110)";
			context.fillRect(1,1,5,5);
			context.fillRect(9,1,5,5);
			context.fillRect(17,1,5,5);
			context.fillRect(1,9,5,5);
			context.fillRect(9,9,5,5);
			context.fillRect(17,9,5,5);
			context.fillRect(1,17,5,5);
			context.fillRect(9,17,5,5);
			context.fillRect(17,17,5,5);

			context.fill();
			
				
		}else{
			console.error("No se ha podido cargar el contexto de canvas.");
		}
	}

	function dibujalista(idCanvas){
		context=cargarContext(idCanvas);
		if(context){
			context.beginPath();
			context.fillStyle="rgb(110,110,110)";
			context.fillRect(1,1,22,5);
			context.fillRect(1,9,22,5);
			context.fillRect(1,17,22,5);
			

			context.fill();
			
				
		}else{
			console.error("No se ha podido cargar el contexto de canvas.");
		}
	}

	//resizeCanvas();
	dibujaLupa("lupa");dibujamenu("menuIcono");dibujalista("menulista");
}

window.addEventListener("load", init);