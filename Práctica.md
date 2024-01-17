# Entrada y salida de datos

// var nom = prompt('Introduce tu nombre: '); //Prompt es sólo para digitar cadenas de texto
// alert("Hola, " + nom + "!")

## Condicional if-else

var nom = prompt("Ingresa tu nombre: ");
if (nom !== null && nom !== "") { //null es valor cancelado y "" es una cadena vacia.
    alert("Hola, " + nom + "!");
}else{
    alert("No has introducido tu nombre")
}
