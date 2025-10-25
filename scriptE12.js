let opcion;
let cantidad = 0;
let suma = 0;
let max = 0;
let min = 0;
let pares = 0;
let impares = 0;

do {
  opcion = parseInt(prompt("1. Ingresar N notas\n2. Promedio\n3. Valor máximo\n"+
"4. Valor mínimo\n5. Cantidad de pares e impares\n6. Cuántos están por encima del promedio\n"+
"7. Generar tabla de multiplicar\n8. Salir\nElige una opción :"));

  switch (opcion) {
    case 1:
      cantidad = 0;
      suma = 0;
      pares = 0;
      impares = 0;
      max = 0;
      min = 0;

      let n = parseInt(prompt("¿Cuántas notas deseas ingresar?"));
      for (let i = 1; i <= n; i++) {
        let nota = parseFloat(prompt(`Ingresa la nota ${i}:`));

        if (i === 1) {
          max = nota;
          min = nota;
        }
        suma += nota;
        cantidad++;
        if (nota > max) max = nota;
        if (nota < min) min = nota;
        if (Math.floor(nota) % 2 === 0) pares++;
        else impares++;
      }
      alert("Notas ingresadas correctamente.");
      break;

    case 2:
      if (cantidad == 0) {
        alert("Primero ingresa las notas (opción 1).");
        break;
      }
      let promedio = suma / cantidad;
      alert(`El promedio es: ${promedio.toFixed(2)}`);
      break;

    case 3:
      if (cantidad == 0) {
        alert("Primero ingresa las notas (opción 1).");
        break;
      }
      alert(`El valor máximo es: ${max}`);
      break;

    case 4:
      if (cantidad == 0) {
        alert("Primero ingresa las notas (opción 1).");
        break;
      }
      alert(`El valor mínimo es: ${min}`);
      break;

    case 5:
      if (cantidad == 0) {
        alert("Primero ingresa las notas (opción 1).");
        break;
      }
      alert(`Cantidad de pares: ${pares}\nCantidad de impares: ${impares}`);
      break;

    case 6:
      alert("No disponible sin guardar las notas individualmente (sin arrays).");
      break;

    case 7:
      if (cantidad == 0) {
        alert("Primero ingresa las notas (opción 1).");
        break;
      }
      let multiplicador = parseFloat(prompt("Ingresa el número para multiplicar las notas:"));
      let promedioNotas = suma / cantidad;
      alert(`Ejemplo: promedio (${promedioNotas.toFixed(2)}) x ${multiplicador} = ${(promedioNotas * multiplicador).toFixed(2)}\n(No se muestran todas las notas porque no se guardan).`);
      break;

    case 8:
      alert("Hasta luego");
      break;
  }

} while (opcion !== 8);