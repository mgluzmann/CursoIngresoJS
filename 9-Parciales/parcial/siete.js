function Mostrar()
{
var contador=0;
var nota;
var sexo;
var acumnota=0;
var aprobados=0;
var bandera=true;
var notamin;
var notamax;

for(contador=0 ; contador<3; contador++)
{
    nota=prompt("Ingrese la nota");
    nota=parseInt(nota);
        while(nota<0 || nota>10)
        {
            nota=prompt("Re-Ingrese nota entre 0 y 10");
        }

    sexo=prompt("Ingrese sexo: f o m");

        while(sexo!="f" && sexo!="m")
        {
            sexo=prompt("Re-Ingrese sexo: f o m");
        }

        if(bandera)
        {
            notamin=nota;
            notamin=parseInt(notamin);
            notamax=nota;
            notamax=parseInt(notamax);
            bandera=false
        }
        if(nota>notamax)
        {
            notamax=nota;
        }
        if(nota<notamin)
        {
            notamin=nota;
        }

    if(sexo=="m" && nota>=6)
    {
        aprobados++;
    }   

    acumnota+=nota;

}
document.write("El promedio de las notas es: "+(acumnota/contador)+"<BR>");

document.write("La nota minima es: "+notamin+"<BR>");

document.write("Cantidad de varones aprobados con nota mayor o igual a 6: "+aprobados);


}
