const PI = 3.1416;
while (true){
    let opcion = parseInt(prompt("Seleccione una opcion: "+
        "\n1. Calcular área de círculo"+"\n2. Calcular área de rectángulo"+
        "\n3. Salir"));
    switch(opcion){
        case 1:
            let radio = parseFloat(prompt("Ingrese el radio:"));
            let areaC = PI*(radio**2);
            console.log("El area del círculo es "+areaC);
            break;
        case 2:
            let base = parseFloat(prompt("Ingrese la base:"));
            let altura = parseFloat(prompt("Ingrese la altura:"));
            let areaR = base * altura;
            console.log("El area del rectángulo es "+areaR);
            break;
        case 3:
            console.log("Hasta luego");
            break;
    }
    if (opcion == 3)
        break;
}