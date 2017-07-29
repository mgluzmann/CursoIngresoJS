function Mostrar()
{
var largo;
var ancho;
var perimetro;

largo=document.getElementById("alrgo").value;
ancho=document.getElementById("ancho").value;
largo=parseInt(largo);
ancho=parseInt(ancho);

perimetro=(2*largo)+(2*ancho);

alert("Se necesitan "+3*perimetro+" metros de alambre para colocarle 3 hilos de alambrado al perímetro.")



}
