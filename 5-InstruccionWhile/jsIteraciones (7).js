function Mostrar()
{
	var num;
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	num=prompt("Ingrese un numero");
	respuesta=prompt("Desea continuar?");

	while(respuesta=="si")
	{
		contador++;
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		respuesta=prompt("Desea continuar?")
	}

	while(isNaN(num))
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
	}

	acumulador=acumulador+num;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN