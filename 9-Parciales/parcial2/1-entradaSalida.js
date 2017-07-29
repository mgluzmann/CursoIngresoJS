//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var lado;
	lado=document.getElementById("lado").value;
	lado=parseInt(lado);
	
	alert("El perimetro del triangulo es: "+(lado*3));
	
}

