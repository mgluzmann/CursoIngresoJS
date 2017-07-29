function Mostrar()
{
var precio1;
var precio2;
var precio3;
precio1=document.getElementById("precioUno").value;
precio2=document.getElementById("precioDos").value;
precio3=document.getElementById("precioTres").value;
precio1=parseInt(precio1);
precio2=parseInt(precio2);
precio3=parseInt(precio3);

alert("La suma de los precios es: "+(precio1+precio2+precio3)+" y el promedio de precio es: "+((precio1+precio2+precio3)/3));
}
