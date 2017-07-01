function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById("edad").value;

if(edad>=18)
{
    alert("Mayor");
}
else
{
    if(edad<13)
    {
        alert("Niño");
    }
    else
    {
        alert("Adolescente");
    }

}




}//FIN DE LA FUNCIÓN