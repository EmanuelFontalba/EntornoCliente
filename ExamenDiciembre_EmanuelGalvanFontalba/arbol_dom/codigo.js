window.addEventListener("load", function(){
	var body = document.getElementsByTagName("body")[0];
	var hijosBody = body.childNodes;
	body.removeChild(hijosBody[0]);
	var parrafo = document.createElement("p");
	parrafo.appendChild(document.createTextNode("Emanuel"));
	body.insertBefore(parrafo, body.childNodes[0]);
	body.appendChild(document.createElement("p").appendChild(document.createTextNode("Galván Fontalba")));
});