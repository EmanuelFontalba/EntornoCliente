function init(){
	Array.prototype.anadir = function(valor, permite){
		if(permite === undefined){
			permite = true;
		}

		if(permite === true){
			this[this.length] = valor;
		}else if(permite === false){
			if(!this.contiene(valor)){
				this[this.length] = valor;
			}else{
				console.error("Ese valor ya está incluido en el array.");
			}
		}else{
			console.error("Campo permite no válido en esta función.");
		}
	}

	Array.prototype.contiene = function(elemento){
		for(var i = 0; i<this.length; i++){
			if(this[i]===elemento){
				return true;
			}
		}
		return false;
	}

	Array.prototype.sinEl = function(valor){
		var encontrado = false;
		for(var i = 0; i<this.length; i++){
			if(this[i]===valor){
				this.splice(i,1);
				encontrado=true;
			}
		}
		if(!encontrado){
			console.error("Elemento no encontrado");
		}
	}

	var array = [0,1,2,3,4];
	console.log("Array original");
	console.log(array);
	console.log("Añado elemento con permite a undefined");
	array.anadir(2);
	console.log(array);
	console.log("Añado elemento con permite a true");
	array.anadir(3, true);
	console.log(array);
	console.log("Añado elemento con permite a false");
	array.anadir(0, false);
	console.log(array);
	console.log("Añado elemento con permite a 4");
	array.anadir(3,4);
	console.log(array);
	console.log("Usando la nueva funcion sinEl(1)");
	array.sinEl(1);
	console.log(array);
	console.log("Usando la nueva funcion sinEl(9)");
	array.sinEl(9);
	console.log(array);

}

window.addEventListener("load", init);