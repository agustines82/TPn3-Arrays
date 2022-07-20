//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function MayusculasMinusculas(cadena) {
    if (cadena.includes(cadena.toLowerCase())) {
        document.write(`La cadena de texto solo tiene minúsculas`);
    } else if (cadena.includes(cadena.toUpperCase())) {
        document.write(`La cadena de texto solo tiene mayúsculas`);
    } else {
        document.write(
            `La cadena de texto tiene una mezcla de minúsculas y mayúsculas`
        );
    }
}

let cadenaX = prompt("Ingrese una cadena de texto");
MayusculasMinusculas(cadenaX);
