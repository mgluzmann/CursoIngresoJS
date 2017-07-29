function Mostrar()
{
var num;
var respuesta=true;
var contador=0;
var pares=0;
var acum=0;
var max;
var min;
var bandera=true;

while(respuesta==true)
    {
        num=prompt("Ingrese un numero positivo");
        num=parseInt(num);

            while(num<0)
            {
                num=prompt("Re-Ingrese un numero mayor a 0");
            }
       
        respuesta=confirm("Desea continuar?");

        if(bandera)
        {
            max=num;
            max=parseInt(max);
            min=num;
            min=parseInt(min);
            bandera=false
        }
        if(num>max)
        {
            max=num;
        }
        if(num<min)
        {
            min=num;
        }

        if(num%2==0)
        {
            pares++;
        }

        acum+=num;
        contador++;
    }

    console.log(min);
    console.log(max);
    console.log(acum);
    console.log(acum / contador);
    console.log(pares);
    
    document.write("La cantidad de numeros pares es "+pares+". El promedio de todos los números ingresados es "+(acum/contador)+". La suma de todos los numeros es"+acum+". El numero máximo es"+max+"y el minimo "+min)
}
