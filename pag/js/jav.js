function  verificarRespuestas(){
	var total = 5;
	var puntos = 0;

	var myForm = document.forms["cuestion"]
	var respuestas = ["a","b","c","a","b"];

	for(var i=1; i <= total; i++){
		if(myForm["p" + i].value === null || 
		   myForm["p" + i].value === ""){
			alert("por favor responde la pregunta" + i);
			return false;
		
			}else{
				if (myForm["p" +i].value === respuestas[i - 1]){
				puntos++;		
			}
		}
	}

	var resultado = document.getElementById("resultado")
	resultado.innerHTML = '<h3>obtuviste <span>' +puntos+'</span> de <span>' +total+' puntos</span></h3>';
	return false;
}