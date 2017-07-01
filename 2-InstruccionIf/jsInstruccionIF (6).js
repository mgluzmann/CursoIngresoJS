function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById("edad").value;

if(edad>=18)
{
    alert("La persona es mayor que adolescente");
}
else
{
    if(edad<13)
    {
        alert("La persona es menor que adolescente");
    }
    else
    {
        alert("La persona no es adolescente");
    }

}




}//FIN DE LA FUNCIÓN