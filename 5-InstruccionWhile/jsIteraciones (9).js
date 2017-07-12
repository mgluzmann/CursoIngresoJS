function Mostrar()
{

	var max;
	var min;
	var contador=0;
	var bandera=true;
	// declarar variables
	
	var respuesta=true;

	while(respuesta==true)
	{
		num=prompt("Ingrese un numero");

		if(bandera)
		{
			max=num;
			min=num;
			bandera=false;
		}
		else
			{

				if(num>max)
					{
						max=num;
					}

				if(num<min)
					{
						min=num;
					}
			}		
	respuesta=confirm("desea continuear?");
	}	

document.getElementById("maximo").value=max;
document.getElementById("minimo").value=min;


}//FIN DE LA FUNCIÓN