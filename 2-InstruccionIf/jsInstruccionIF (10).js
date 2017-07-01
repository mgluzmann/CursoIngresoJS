function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var num;
	num=Math.floor((Math.random() * 10) + 1);
	num=parseInt(num);

	alert("La nota del examen es: "+num);

	if(num>=10)
	{
		alert("Excelente");
	}

	else
	{
		if(num>=4 && num<9)
		{
			alert("Aprobó");
		}
		
		else
		{
			alert("Vamos, la próxima se puede")
		}
	}
}//FIN DE LA FUNCIÓN