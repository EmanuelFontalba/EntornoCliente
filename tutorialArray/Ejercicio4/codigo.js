var arr = ["Plum", 2, "Donkey",3 ,false , 4];

function filterNumeric(array){
	var numeric = [];
	for(var i=0; i<array.length; i++){
		if(typeof array[i] == typeof 0){
			numeric.push(array[i]);
		}
	}
	return numeric;
}

window.addEventListener("load", function(){
	console.log("Array completo: "+arr);
	console.log("Array de valores numericos: "+filterNumeric(arr));
});