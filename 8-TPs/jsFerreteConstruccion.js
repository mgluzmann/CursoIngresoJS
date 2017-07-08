/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 

{

var largo;
var ancho;
var area;

largo=document.getElementById("Largo").value;
largo=parseInt(largo);
ancho=document.getElementById("Ancho").value;
ancho=parseInt(ancho);

area=((largo+ancho)*2)*3;
area=parseInt(area);

alert(area);

}

function Circulo () 
{
var radio; 
var circunferencia;

radio=document.getElementById("Radio").value;
radio=parseInt(radio);

circunferencia=parseInt(circunferencia);
circunferencia=(2*Math.PI*radio)*3;

alert(circunferencia);
}
function Materiales () 
{
var largo;
var ancho;
var area=parseInt(area);
var cal;
var cemento;

largo=document.getElementById("Largo").value;
largo=parseInt(largo);
ancho=document.getElementById("Ancho").value;
ancho=parseInt(ancho);

area=(largo*ancho);
cemento=2*area;
cal=3*area;

alert("para hacer el contrapiso se necesitan: "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
}