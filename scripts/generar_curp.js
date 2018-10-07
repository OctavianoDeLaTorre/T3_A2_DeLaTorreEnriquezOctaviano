function generarCURP () {
	var nombre = document.forms[0].elements[0].value;
	var primerAp = document.forms[0].elements[1].value;
	var segundoAp = document.forms[0].elements[2].value;
	var sexo = document.forms[0].elements[3].value;
	var fechaNacimiento = document.forms[0].elements[5].value;
	var estado = document.forms[0].elements[6].selectedIndex;

	
	var CURP = 
		obtnerPrimerLetra(formaterCadena(primerAp))+
		obtenerVocal(formaterCadena(primerAp),1)+
		obtnerPrimerLetra(formaterCadena(segundoAp))+
		obtnerPrimerLetra(nombre)+
		obtnerFecha(fechaNacimiento)+
		obtenerSexo(sexo)+
		obtenerEstado(estado)+
		obtenerConsonate(formaterCadena(primerAp))+
		obtenerConsonate(formaterCadena(segundoAp))+
		obtenerConsonate(nombre)+
		obtenerNumero(fechaNacimiento);

		alert("CURP : " + CURP.toUpperCase());
}

function obtenerNumero(fecha){
	return '0'+fecha.substring(2, 3);
}

function obtenerConsonate(cadena){
	for (var i = 1; i < cadena.length; i++) {
		if(!esVocal(cadena.charAt(i))){
			return cadena.charAt(i);
		}
	}
}

function obtenerEstado(numEstado){
var ENTIDAD_FEDERATIVA_VALOR = ["AS",
                          "BC",
		                  "BS",
                          "CC",
                          "CL",
                          "CM",
                          "CS",
                          "CH",
                          "DF",
                          "DG",
                          "GT",
                          "GR",
                          "HG",
                          "JC",
                          "MC",
                          "MN",
                          "MS",
                          "NT",
                          "NL",
                          "OC",
                          "PL",
                          "QT",
                          "QR",
                          "SP",
                          "SL",
                          "SR",
                          "TC",
                          "TS",
                          "TL",
                          "VZ",
                          "YN",
                          "ZS",
                          "SM",
                          "NE"];
     return ENTIDAD_FEDERATIVA_VALOR[numEstado];
}

function obtenerSexo (sexo) {
	if (sexo == 'on') {
		return 'H';
	} else {
		return 'M';
	}
}

function obtnerFecha (fecha) {
	return fecha.substring(2, 4)+
		fecha.substring(5, 7)+
		fecha.substring(8, 10);
}

function obtnerPrimerLetra(cadena){
	for (var i = 0; i < cadena.length; i++){
		if (cadena.charAt(i) != " ") {
			return cadena.charAt(i);
		}
	}
}


function obtenerVocal(cadena,num) {
	var cont = 0;
	for (var i = 0; i < cadena.length; i++){
		if (esVocal(cadena.charAt(i))) {
			cont++;
			if (cont == num) {
				return cadena.charAt(i);
			}
		}
	}
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

function formaterCadena (cadena) {
	var res = cadena.split(" ");
	return res[res.length - 1];
}