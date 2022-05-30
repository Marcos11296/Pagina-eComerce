var carro=[];
var total=0
function verCarro(){
	var largo=carro.length;
	for(var x=0; x<largo;x++){
		for(var y=0; y<carro[x].length;y++){
			alert(carro[x][y]);
		}
	}
}
function agregarCarro1(){
	var z =document.getElementById("1").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
	}
function agregarCarro2(){
	var z =document.getElementById("2").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro3(){
	var z =document.getElementById("3").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro4(){
	var z =document.getElementById("4").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro5(){
	var z =document.getElementById("5").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro6(){
	var z =document.getElementById("6").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro7(){
	var z =document.getElementById("7").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro8(){
	var z =document.getElementById("8").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro9(){
	var z =document.getElementById("9").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function agregarCarro10(){
	var z =document.getElementById("10").id;
	var prod=document.getElementById("prod"+z).textContent;
	var precio=document.getElementById("precio"+z).textContent;
		n=document.getElementById("cantidad"+z).value;
		total=total+(parseInt(n)*parseInt(precio));
		carro.push([prod+" cantidad "+n+" Valor "+precio]);
		alert("agregado al carrito");
}
function vaciarCarro(){
	carro=[];
	alert("Carrito Vaciado");
}
function pagar(){
	var largo=carro.length;
	for(var x=0; x<largo;x++){
		for(var y=0; y<carro[x].length;y++){
			alert(carro[x][y]);
		}
	}
	alert("El total apagar es "+total);
}
