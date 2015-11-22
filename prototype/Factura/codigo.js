function init(){
	function Factura(cliente, elementos){
		this.cliente = cliente;
		this.elementos = elementos;
	}

	function Cliente(nombre, direccion, telefono){
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
	}

	function Elemento(nombre, cantidad, precio){
		this.nombre = nombre;
		this.cantidad = cantidad;
		this.precio = precio;
	}

	Cliente.prototype.muestraCliente = function (){
		console.log(this.nombre);
		console.log(this.direccion);
		console.log(this.telefono);
	}

	Elemento.prototype.calculaPrecio = function (){
		return this.cantidad*this.precio;
	}

	Factura.prototype.calculaTotal = function (){
		var precio = 0;
		for(var i = 0; i<this.elementos.length; i++){
			precio += this.elementos[i].calculaPrecio();
		}
		return precio;
	}

	Factura.prototype.muestraTotal = function (){
		console.log("El total de la factura es: "+this.calculaTotal()+" euros.");
	}

	var cliente = new Cliente("Emanuel", "Calle Judios 10", "666666666");
	var elementos = [new Elemento("Croquetas", 20, 0.5),
					new Elemento("Empanada", 3, 1.2),
					new Elemento("Pepsi", 1, 1.5)];
	var factura=new Factura(cliente, elementos);

	factura.cliente.muestraCliente();
	factura.muestraTotal();

}

window.addEventListener("load", init);