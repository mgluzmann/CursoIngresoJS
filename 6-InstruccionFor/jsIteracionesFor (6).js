function Mostrar()
{
    var num;
    num=prompt("Ingrese un numero");
    var contadorpares=0;

for(i=1 ; i<=num ; i++)
{   
    
    if(i%2==0)
    {
        contadorpares++;
        console.log(i);
    }
}
console.log(contadorpares);
}//FIN DE LA FUNCIÓN