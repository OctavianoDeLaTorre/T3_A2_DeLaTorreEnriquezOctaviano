function analizarCadena(cadena,letra){
	var cadena = document.forms[0].elements[0].value;
	var letra = document.forms[0].elements[1].value;

	var resultados = contarVocales(cadena);
	document.forms[0].elements[2].value = resultados[0];
	document.forms[0].elements[3].value = resultados[1];
	document.forms[0].elements[4].value = numApariciones(cadena,letra);
	document.forms[0].elements[5].value = cadenaLoca(cadena);
	
}

function contarVocales(cadena){
	var resultados = [0,0];
	//var cadena = prompt("Ingresa una cadena: ");
	for (var i = 0; i < cadena.length; i++) {
		if(esVocal(cadena.charAt(i))){
			resultados[0]++;
		} else {
			resultados[1]++;
		}
	}
	return resultados;
}

function esVocal(caracter){
	var array = ["A","E","I","O","U"];
	for (var j = 0; j < array.length; j++){
		if(caracter.toUpperCase() == array[j]){
			return true;
		} 
	}

	return false;
}


function numApariciones(cadena,letra){
	var numAp = 0;
	for (var i = 0; i < cadena.length; i++) {
		if (letra.toUpperCase() == cadena.charAt(i).toUpperCase()) {
			numAp ++;
		}
	}
	return numAp;
}

function cadenaLoca (cadena) {
	var cadenaLoca = "" ;
	for (var i = 0; i < cadena.length; i++) {
		if (i%2 == 0) {
			cadenaLoca+= cadena.charAt(i).toUpperCase();
		}else {
			cadenaLoca+= cadena.charAt(i);
		}
			
	}
	return cadenaLoca;
}


