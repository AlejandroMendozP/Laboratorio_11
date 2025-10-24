while (true){
    let suma = 0;
    let numero = prompt("Ingrese un número:");
    for (let i = 0; i < numero.length; i++){
        let digito = parseInt(numero.charAt(i));
        suma+= (digito ** numero.length);
    }
    if (suma == parseInt(numero)){
        console.log("Es un número de Armstrong"); }
    else {console.log("No es un número de Armstrong"); }
    let continuar = prompt("¿Desea continuar? S/N");
    if (continuar.toLowerCase() === "n") {
        console.log("Hasta luego");
        break;
    }
}