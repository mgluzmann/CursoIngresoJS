function Mostrar()
{
    var num;
    num=prompt("Ingrese un numero");
    var contadordivisores=0;

for(i=1 ; i<=num ; i++)
{   
    
    if(num%i==0)
    {
        contadordivisores++;

            if(contadordivisores>2)
            {
                break;
            }
    }
}
if(contadordivisores==2)
{
    alert("es primo");
}
else
{
    alert("no es primo");
}
console.log(contadordivisores);




}//FIN DE LA FUNCIÓN