function Mostrar()
{
	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;

	while(respuesta==true)
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);

		if(num>=0)
		{
			positivo+=num;
		}
		else
		{
			negativo*=num;
		}
respuesta=confirm("Quiere continuar?");
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN