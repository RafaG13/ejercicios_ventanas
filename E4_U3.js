
function formatearNumero(n){
	let nCadena = ""+ n;
	if(nCadena.length>1){
		return nCadena;
	}
	else{
		nCadena = "0"+nCadena;
		return nCadena
	}
}


let encendido = true;
let funHora = () => {
  let horaActual = new Date();
  horaFormateada = formatearNumero(horaActual.getHours())+":"+formatearNumero(horaActual.getMinutes())+":"+formatearNumero(horaActual.getSeconds());
  document.title = horaFormateada;  
  document.getElementById("horas").innerHTML = formatearNumero(horaActual.getHours());
  document.getElementById("minutos").innerHTML = formatearNumero(horaActual.getMinutes());
  document.getElementById("segundos").innerHTML = formatearNumero(horaActual.getSeconds());
}

let idInterval =  setInterval(funHora, 1000);
function parar() {
	if(encendido){
		encendido = false;
		clearTimeout(idInterval);
		document.getElementById("idBoton").value = "On";
		document.getElementById("idBoton").style = "background-color:green;";
	}
	else{
		encendido = true;
		idInterval =  setInterval(funHora, 1000);
		document.getElementById("idBoton").value = "Off";
		document.getElementById("idBoton").style = "background-color:red;";
	}
}
	
/*Contenido propio del ejercicio 4*/

function fechaActual(){
	document.getElementById("imprimrFecha").innerHTML = new Date();
}	
setTimeout(fechaActual, 20000);	
	
	
	