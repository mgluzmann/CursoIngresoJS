function Mostrar()
{
var num1;
var num2;

num1=prompt("Ingrese el primer numero");
num2=prompt("Ingrese el segundo numero");

num1=parseInt(num1);
num2=parseInt(num2);

    if(num1==num2)
    {
        document.write("Dado que los nros son igual el producto de su multiplicacion es: "+num1*num2);
    }
        else if(num1>num2)
        {
            document.write("Dado que el primer nro es mayor al segundo su resta es: "+(num1-num2));
        }
            else
            {
                document.write("Dado que el primer nro es menor al segundo su suma es: "+(num1+num2));
            }

}
