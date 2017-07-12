function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta=true;
	var acumneg=0;
	var acumpos=0;
	var contpos=0;
	var contneg=0;
	var contceros=0;
	var contpares=0;
	var prompos;
	var promneg;
	var dif;


	while(respuesta==true)
	{
		num=prompt("ingrese num");
		num=parseInt(num);

	while(isNaN(num))
	{
		num=prompt("ingrese num");
		num=parseInt(num);
	}	
		if(num<0)
		{
			acumneg+=num;
			contneg++;
		}
		else if(num>0)
		{
			acumpos+=num;
			contpos++;
		}
		else
		{
			contceros++;
		}
		if(num%2==0)
		{
			contpares++;
		}

	respuesta=confirm("desea continuar?");
	}	
prompos=acumpos/contpos;
promneg=acumneg/contneg;
dif=acumpos-acumneg;

document.write(prompos).value;
}//FIN DE LA FUNCIÓN