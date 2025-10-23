while (true) {
    let suma = 0;
    let maximo = parseInt(prompt("Ingrese el numero máximo del rango:"));
    for(let i = 1; i <= maximo; i++){
        if (i % 5 == 0){
            continue;
        }
        suma += i
    }
    console.log("La suma total es "+suma);
    let continuar = prompt("¿Desea continuar? S/N");
    if (continuar.toLowerCase() === "n") {
        console.log("Hasta luego");
        break;
    }
}