function Mostrar()
{
var ventas;
var min;
var max;
var dias=0;
var bandera=true;

while(dia<24)
{
	dia++;
    ventas=prompt("Ingrese el valor de las ventas del día");
    
        
        while(ventas<0)
            {
                ventas=prompt("Re-Ingrese el valor de las ventas del día")
            }
	ventas=parseInt(ventas);	

                if(bandera)
		            {
			             max=ventas;
			             min=ventas;
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
