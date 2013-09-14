function check(){

	var container = document.getElementById('form');

	// var elementDiv = container.getElementsByTagName('div');

	// var cont = 0;
	// for(var n = 0; n < elementDiv.length; n++){
	// 	if(elementDiv[n].className == 'cont-t'){
	// 		cont++;
	// 	}
	// }

	// alert("total: " + cont);

	var elements = container.getElementsByTagName('input');

	var cont2 = 0; 
	for(var n = 0; n < elements.length; n++){
		if(elements[n].type == 'text' && elements[n].value == ""){
			cont2++;
		}
	}

alert("Numero de elementos:" + cont);


}