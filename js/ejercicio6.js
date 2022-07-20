//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla. La fórmula del perímetro  es p = 2*(a +b)
const perimetro = (a, b) => document.write("El perimetro es de " + 2 * (a + b));

let a = parseInt(prompt("Ingrese un 1er numero para calcular un perímetro"));
let b = parseInt(prompt("Ingrese un 2do numero para calcular un perímetro"));

perimetro(a, b);
