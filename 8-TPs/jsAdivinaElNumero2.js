/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;

function comenzar()
{
//Genero el número RANDOM entre 1 y 100
numeroSecreto=Math.floor(Math.random()*100)+1;
contadorIntentos=0;
contadorIntentos=parseInt(contadorIntentos);

//alert(numeroSecreto );

}

function verificar()
{
  contadorIntentos=contadorIntentos+1;
  document.getElementById("intentos").value=contadorIntentos;

  var num;
  num=document.getElementById("numero").value;
  num=parseInt(num);

	if(numeroSecreto==num && contadorIntentos==1)
	{
    alert("usted es un Psíquico");    
 	}
	else if(numeroSecreto==num && contadorIntentos==2)
    {
      alert("excelente percepción");
    }
	else if(numeroSecreto==num && contadorIntentos==3)
    {
      alert("esto es suerte");
    }
	else if(numeroSecreto==num && contadorIntentos==4)
    {
      alert("excelente tecnica");
    }
	else if(numeroSecreto==num && contadorIntentos==5)
    {
      alert("usted está en la media");
    }
	else if(numeroSecreto==num && contadorIntentos>5 && contadorIntentos<=10)
    {
      alert("falta técnica");
    }
	else if(numeroSecreto==num && contadorIntentos>5 && contadorIntentos>10)
    {
      alert("afortunado en el amor!!");
    }
}