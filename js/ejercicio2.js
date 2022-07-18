/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
let ciudades = [];
do {
    let ciudad = prompt("Ingrese una ciudad");
    ciudades.push(ciudad);
} while (confirm("Desea seguir agregando ciudades?"));

//Mostrar la longitud del arreglo.
document.write(ciudades.length + "<br>");

//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(
    ciudades[0] + " ",
    ciudades[2] + " ",
    ciudades[ciudades.length - 1] + "<br>"
);

//Añade en última posición la ciudad de París.
ciudades.push("Paris");
console.log(ciudades);
//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(ciudades[2] + "<br>");

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona";
console.log(ciudades);
