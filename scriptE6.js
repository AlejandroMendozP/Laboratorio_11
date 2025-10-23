while (true) {
    let numero = parseInt(prompt("Ingrese un numero"));
    for (let i = 1; i <= 12; i++) {
        console.log(numero * i);
    }
    let continuar = prompt("Desea continuar? S/N");
    if (continuar.toLowerCase() === "n") {
        console.log("Programa finalizado");
        break;
    }
}