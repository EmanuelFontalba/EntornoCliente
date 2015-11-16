var arr = ["Plum", 2, "Donkey", false, "JavaScript"];

function search(array, value){
	for(var i=0; i<array.length; i++){
		if(array[i]==value){
			return i;
		}
	}
	return -1;
}

window.addEventListener("load", function(){
	console.log("Array completo: "+arr);
	console.log("Valor(Hola) encontrado en la posicion: "+search(arr,"Hola"));
	console.log("Valor(false) encontrado en la posicion: "+search(arr, false));
	console.log("Valor(JavaScript) encontrado en la posicion: "+search(arr, "JavaScript"));
});