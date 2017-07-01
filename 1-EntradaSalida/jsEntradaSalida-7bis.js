/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var resultado;
var num1;
var num2;

function sumar()
{	
	num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);
    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);
    resultado=num1+num2;

    alert("Resultado de la suma es "+resultado);
}

function restar()
{
	var num1;
    var num2;
    var resultado;

    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);
    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);
    resultado=num1-num2;

    alert("Resultado de la resta es "+resultado);
}

function multiplicar()
{ 
	var num1;
    var num2;
    var resultado;

    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);
    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);
    resultado=num1*num2;

    alert("Resultado de la multiplicacion es "+resultado);
}

function dividir()
{
	var num1;
    var num2;
    var resultado;

    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);
    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);
    resultado=num1/num2;

    alert("Resultado de la división es "+resultado);
}

