
window.onload = function(){
	let cadenaResultados = "";
	let dni;
	const correspondencias = ["T","R","W","A","G","M","Y","F","P","D","X","D","N","J","Z","S","Q","V","H","L","C","K","E"];
	const divResultados = document.getElementById("resultados");



	function peticion(){
		do{
			dni = prompt("Introduce tu DNI: ");
			if((dni.length!=8 || isNaN(parseFloat(dni)) || parseFloat(dni)%1!=0) && parseFloat(dni)!=-1) alert("Introduce un número positivo de 8 cifras (ceros a la izquierda si es necesario)");
			
			if(parseFloat(dni)==-1) {
				clearInterval(idInterval);
				divResultados.innerHTML = cadenaResultados;
				break;
			}
		}while(dni.length!=8 || isNaN(parseFloat(dni)) || parseFloat(dni)%1!=0);
		
		if(dni!=-1) cadenaResultados += `<p>${parseFloat(dni)} => ${letraDni(parseFloat(dni))}</p>`;
	}

	function letraDni(d){
		let resto = d%23;
		return correspondencias[resto];	
	}

	let idInterval = setInterval(peticion, 5000);
	
}
