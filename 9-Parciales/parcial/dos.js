function Mostrar()
{
  var importe;
  var iva;
  importe=prompt("Ingrese el importe del producto");
  importe=parseInt(importe);
  iva=importe*1.21;

  document.getElementById("importeFinal").value=iva;

}
