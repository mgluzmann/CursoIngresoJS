function Mostrar()
{
  var importe;
  var importefinal;
  importe=prompt("Ingrese el importe");
  importe=parseInt(importe);
  importefinal=importe*0.75


document.getElementById("importeFinal").value=importefinal;
}
