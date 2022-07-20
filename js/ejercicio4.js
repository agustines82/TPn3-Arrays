// Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function parOImpar(numero) {
    if (numero % 2 === 0) {
        document.write(`El numero ${numero} es par`);
    }
    if (numero % 2 === 1) {
        document.write(`El numero ${numero} es impar`);
    }
}
parOImpar(2);
document.write("<br>");
parOImpar(5);
document.write("<br>");

let numeroX = parseInt(prompt("ingrese un numero"));
parOImpar(numeroX);
