function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Julio":
    case "Agosto":
       
        alert("estamos en invierno, abrigate");
        break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        
        alert("Ya pasó el invierno");
        break;

    default:
        alert("falta para el invierno");

}




}//FIN DE LA FUNCIÓN