while (true) {
    let monto = parseInt(prompt("Ingrese el monto a retirar:"));
    let billetes100 = Math.floor(monto / 100);
    monto = monto % 100;
    let billetes50 = Math.floor(monto / 50);
    monto = monto % 50;
    let billetes20 = Math.floor(monto / 20);
    monto = monto % 20;
    let billetes10 = Math.floor(monto / 10);
    monto = monto % 10;

    console.log("De 100: " + billetes100);
    console.log("De 50 : " + billetes50);
    console.log("De 20 : " + billetes20);
    console.log("De 10 : " + billetes10);

    let continuar = prompt("¿Desea hacer otro retiro? S/N");
    if (continuar.toLowerCase() === "n") {
        console.log("Hasta luego");
        break;
    }
}