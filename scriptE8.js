while (true) {
    let maximo = parseInt(prompt("Ingrese el numero máximo del rango:"));
    let contadorPrimos = 0;
    for (let i = 1; i < maximo; i++){
        let contador = 0;
        for (let p = 0; p <= i; p++){
            if (i % p ==0){
                contador++;
            }
        }
        if (contador <= 2){
            console.log(i);
        }
    }
    let continuar = prompt("¿Desea continuar? S/N");
    if (continuar.toLowerCase() === "n") {
        console.log("Hasta luego");
        break;
    }
}