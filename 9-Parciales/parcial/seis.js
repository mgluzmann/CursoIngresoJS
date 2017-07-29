function Mostrar()
{
var ventas;
var min;
var max;
var dias=0;
var bandera=true;

for(dia=0 ; dia < 24 ; dia++)
{
    ventas=prompt("Ingrese el valor de las ventas del día");
    ventas=parseInt(ventas);
        
        while(ventas<0)
            {
                ventas=prompt("Re-Ingrese el valor de las ventas del día")
            }

                if(bandera)
		            {
			             max=ventas;
                         max=parseInt(max);
			             min=ventas;
                         min=parseInt(min);
			             bandera=false;
		            }
                else
		        	{

			        	if(ventas>max)
			        		{
				        		max=ventas;
				        	}

			        	if(ventas<min)
			    		    {
					    	min=ventas;
					        }
			}   

}
alert("La venta mas baja fue de: "+min+"y la venta más alta fue de"+max);
}
