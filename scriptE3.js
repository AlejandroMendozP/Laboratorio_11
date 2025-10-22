let suma = 0;
let nota;
let contador = 1;
while (contador <= 5) {
  nota = parseFloat(prompt("Ingrese la nota " + contador));
  if (nota < 0 || nota > 20) {
    console.log("Debe estar entre 0 y 20.");
    continue;
  }
  suma += nota;
  contador++;
}
let promedio = suma / 5;
console.log("El promedio es: " + promedio.toFixed(2));