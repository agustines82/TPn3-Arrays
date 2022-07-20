//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function multiplos(numero) {
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        let resultado = numero * multiplicador;
        document.write(`${numero} x ${multiplicador} = ${resultado} <br>`);
    }
}

let numero = parseInt(prompt("Ingrese un número"));
multiplos(numero);
