function solicitarNumeroDecimal(){
	var numDecimal = document.forms[0].elements[0].value;

	document.forms[0].elements[1].value = convertirDec_Bin(numDecimal);
	document.forms[0].elements[2].value = convertirDec_Oct(numDecimal);
	document.forms[0].elements[3].value = convertirDec_Hex(numDecimal);
}

function convertirDec_Bin(num){
	return (parseFloat(num)).toString(2);
}

function convertirDec_Oct(num){
	return (parseFloat(num)).toString(8);
}

function convertirDec_Hex(num){
	return (parseFloat(num)).toString(16);
}