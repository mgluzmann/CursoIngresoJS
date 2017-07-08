/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/



function Sumar () 
{
var p1;
var p2;
var p3;

p1=document.getElementById("PrecioUno").value;
p2=document.getElementById("PrecioDos").value;
p3=document.getElementById("PrecioTres").value;

p1=parseInt(p1);
p2=parseInt(p2);
p3=parseInt(p3);

var resultado;
resultado=(p1+p2+p3);

alert(resultado);


}
function Promedio () 
{
var p1;
var p2;
var p3;

p1=document.getElementById("PrecioUno").value;
p2=document.getElementById("PrecioDos").value;
p3=document.getElementById("PrecioTres").value;

p1=parseInt(p1);
p2=parseInt(p2);
p3=parseInt(p3);

var prom;
prom=(p1+p2+p3)/3;

alert(prom);
}
function PrecioFinal () 
{
var p1;
var p2;
var p3;

p1=document.getElementById("PrecioUno").value;
p2=document.getElementById("PrecioDos").value;
p3=document.getElementById("PrecioTres").value;

p1=parseInt(p1);
p2=parseInt(p2);
p3=parseInt(p3);

var iva;
iva=(p1+p2+p3)*1.21;

alert(iva);
}