var arr = ["Plum", 2, "Donkey",3 ,false , 4];

function filterNumericInPlace(array){

	for(var i=0; i<array.length; i++){
		if(typeof array[i] != typeof 0){
			array.splice(i,1);
		}
	}

}

window.addEventListener("load", function(){
	console.log("Array completo: "+arr);
	filterNumericInPlace(arr);
	console.log("Array de valores numericos: "+arr);
});