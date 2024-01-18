//Punto 1
//Escribe un programa que muestre los números del 10 al 1 por consola console.log() y en la 
// página web con document.write()
/*
for (i = 10; i >= 1; i--){
    console.log(i);
    document.write(i);
}
*/

//Punto 2
//Escribe un programa que pida dos números, determinar cuál es el mayor y
//sacarlo por consola y por la página web. 
/*
let num1 = parseInt(prompt("Ingrese el primer número: ")); //No es necesario el parseInt porque no voy a utilizar la variable en una operación matemática.
let num2 = parseInt(prompt("Ingrese el segundo número: ")); 

if (num1 > num2){
    console.log("El " + num1 + " es mayor");
    document.write("El " + num1 + " es mayor");
}else{
    console.log("El " + num2 + " es mayor");
    document.write("El " + num2 + " es mayor");
}
*/

//Punto 3
//Escribe un programa que pida dos números y muestre la suma de los dos en la consola
//(console.log) y en la página web (document.write).

/*
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

var resultado = num1 + num2; 

console.log("La suma de los dos números es: " + resultado);
document.write("La suma de los dos números es: " + resultado);
*/ 

//Punto 4
//Escribe un programa que pida tu nombre, tu edad, tu estatura y tu estado civil
//(casado o soltero). Luego debe mostrar estos datos en una misma línea si el estado civil es
//casado, y en columna si el estado civil es soltero. (resultado por consola y en la página web
//(documento.write)).

/*
let nombre = prompt("Ingresa tu nombre: ");
let edad = parseInt(prompt("Ingresa tu edad: "));
let estatura = parseFloat(prompt("Ingresa tu estatura: "));
let estadoCivil = prompt("Ingrese si es soltero o casado: ");

saludoLinea = `Nombre: ${nombre} + Edad: ${edad} + Estatura: ${estatura} + Estado Civil: ${estadoCivil}`

if (estadoCivil == "casado"){
    document.write(saludoLinea);
    console.log(saludoLinea);
}else if (estadoCivil == "soltero"){  //Preguntar a que se refiere con columna  
    document.write("Nombre: " + nombre + "<br>"); 
    document.write("Edad: " + edad + "<br>");
    document.write("Estatura: " + estatura + "<br>");
    document.write("Estado Civil: " + estadoCivil + "<br>");

    console.log("Nombre: " + nombre + "<br>");
    console.log("Edad: " + edad + "<br>");
    console.log("Estatura: " + estatura + "<br>");
    console.log("Estado Civil: " + estadoCivil + "<br>");
}else{
    alert("Estado civil no válido");
}
*/

//Punto 5
//Escribe un programa que pida una palabra y devuelva el número de caracteres que tiene la palabra.
/*
let palabra = prompt("Ingrese una palabra: ");
alert("La palabra " + palabra + " tiene " + palabra.length + " letras");
console.log("La palabra " + palabra + " tiene " + palabra.length + " letras");
*/

//Punto 6
//Crea un programa que guarde dentro de un array los doce meses del año y después escriba
//estos meses en la consola (console.log) y en la página web (document.write).
/*
document.write("Los meses del año son: ");
let meses = ["Enero", " Febrero", " Marzo", " Abril", " Mayo", " Junio", " Julio", " Agosto", " Septiembre", " Octubre", " Noviembre", " Diciembre"]
document.write(meses);
console.log(meses);
*/

//Punto7
//Escribe un programa que pida una nota (numérica), y devuelva un mensaje de valoración de cada
//nota, por ejemplo: Si se introduce un 3, se puede mostrar el mensaje en la consola: «la nota 3 es
//muy insuficiente», si se introduce un 7, el mensaje podría ser: «El 7 es un notable bajo», etc.

/*
let nota = parseInt(prompt("Ingrese una nota: "));

switch(nota){
    case 1: 
        document.write("Suspendido");
        break;
    case 2: 
        document.write("Suspendido");
        break;
    case 3: 
        document.write("Suspendido");
        break;
    case 4: 
        document.write("Suspendido");
        break;
    case 5: 
        document.write("Aprobado");
        break;
    case 6: 
        document.write("Aprobado");
        break;
    case 7: 
        document.write("Notable");
        break;
    case 8: 
        document.write("Notable Alto");
        break;
    case 9: 
        document.write("Sobresaliente");
        break;
    case 10: 
        document.write("Matrícula de honor");
        break;
    default:
        document.write("Inserte una nota válida.");
        break;
}
*/

//Punto8
//Crea un programa para saber si un número (pedido previamente), es impar o par. Se debe
//poder pedir tantos números como el usuario desee.

/*
alert("Escribe un número y te diré si es par o impar");
let num = parseInt(prompt("Ingrese el número: "));
while(num != 0){
     if (num % 2 == 0){
        alert("El número es par");
     }else{
        alert("El número es impar");
     }
     
     num = parseInt(prompt("Ingrese otro número: "));
}
*/

//Punto9
//Crea un programa que dada una cadena de texto, muestre en la consola el texto de manera
//inversa.

/*
let cadena = 'hola mija'; 
let palabras = cadena.split(""); //Convierte en un array cada uno de los caracteres. 
console.log(palabras.reserve()); //Muestra el array de manera inversa 
*/

/*
let str = 'hola';
let arr = Array.from(str);
console.log(arr); 
*/

//Posible solución almacenar las palabras en una función, para convertirlas en un array y después aplicarles el reverse. 

//Punto10
//Crea un programa que cree un objeto “Persona”, con las propiedades «nombre», «edad» y
//«teléfono». Luego debe imprimir todos los datos por consola (console.log) y en la página web 

/*
let Persona = {
    nombre: "Ana", //Las propiedades se separan por comas. 
    edad: 21,
    télefono: 642581502,
}
 console.log(Persona);
*/
