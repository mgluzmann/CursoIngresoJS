function Mostrar()
{
	var num;
	
	var contador=0;
	var acumulador=0;
	var promedio;

while(contador<5)
{
	contador++;
	num=prompt("Ingrese un numero");
	num=parseInt(num);


while(isNaN(num))	
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
	}
	
	acumulador=acumulador+num; // acumulador+=num; es lo mismo.
}	
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN