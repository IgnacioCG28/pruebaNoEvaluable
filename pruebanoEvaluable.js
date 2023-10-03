/*
* Autor: Ignacio Carmona González
* GitHub: https://github.com/IgnacioCG28/pruebaNoEvaluable.git
*/

document.addEventListener("DOMContentLoaded", () => {
  let pregunta = prompt("Ingresa un número");
  let num = parseFloat(pregunta);
  
  if (isNaN(num)) {
    alert("No ingresaste un número.");
    console.log("El número ingresado es positivo.");
  } else if (num === 0) {
    alert("El número es cero");
    console.log("El número ingresado es positivo.");
  } else if (num > 0) {
    alert("El número ingresado es positivo");
    console.log("El número ingresado es positivo.");
  } else {
    alert("El número ingresado es negativo");
    console.log("El número ingresado es negativo.");
  }
  
});
