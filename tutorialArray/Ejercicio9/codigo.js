var ema = {name: "Emanuel", age: 22}
var rafa = {name: "Rafa", age: 34}
var david = {name: "David", age: 12}

var people = [ema, rafa, david];
var peopleOrdenado = [];

function ageSort(personas){
	return personas.sort(compare);
}

function compare(a, b) {
  	if (a.age > b.age){
  		return 1;
  	} 
  	else if (a.age < b.age) {
  		return -1;
  	}
  	else {
  		return 0;
  	}
}
 


window.addEventListener("load", function(){
	console.log("Array original: ");
	for(var i=0; i<people.length;i++){
		console.log(people[i].name);
	}
	peopleOrdenado = ageSort(people);
	console.log("Ordenado por edad: ");
	for(var i=0; i<peopleOrdenado.length;i++){
		console.log(peopleOrdenado[i].name);
	}
	
});