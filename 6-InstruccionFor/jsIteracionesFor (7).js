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
        console.log(i);
    }
}
console.log(contadordivisores);




}//FIN DE LA FUNCIÓN