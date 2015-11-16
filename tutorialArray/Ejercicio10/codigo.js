var arr = [-1,"Plum", 2, "Donkey",3 ,false , 4];

function filter(array, func){
	for(var i=0; i<array.length; i++){
		if(func(array[i])){
			array.splice(i,1);
		}
	}
}

window.addEventListener("load", function(){
	console.log("Array original: "+arr);
	filter(arr, function(value){
		return typeof value != typeof 0;
	});
	console.log("Array numerico: "+arr);
	filter(arr, function(value){
		return (value < 0);
	});
	console.log("Array numerico positivo: "+arr);
});