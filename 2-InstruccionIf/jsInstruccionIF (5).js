function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById("edad").value;

if(edad<13 || edad>17)
{
    alert("La persona no es adolescente");
}

else
{
    alert("La persona es adolescente");
}

}//FIN DE LA FUNCIÓN