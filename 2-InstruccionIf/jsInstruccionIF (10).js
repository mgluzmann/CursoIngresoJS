function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var num;
	num=Math.floor((Math.random() * 10) + 1);
	num=parseInt(num);

	if(num>=9)
	{
		alert("La nota del examen es: "+num+". Excelente");
	}

	else
	{
		if(num>=4)
		{
			alert("La nota del examen es: "+num+". Aprobó");
		}
		
		else
		{
			alert("La nota del examen es: "+num+". Vamos, la próxima se puede");
		}
	}
}//FIN DE LA FUNCIÓN