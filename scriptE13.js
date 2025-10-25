let total = 0;
while (true){
    let producto = parseInt(prompt("Ingrese el precio del producto"));
    total = total + producto;
    let continuar = prompt("¿Desea añadir más productos? S/N");
    if (continuar.toLowerCase() === "n") {
        console.log("El total es "+total);
        if (total > 100){
            descuento = total * 0.1;
            console.log("Tiene un descuento del 10%");
        }
        else if (total >= 50 && total <= 100){
            descuento = total * 0.05;
            console.log("Gana un cupón del 5%");
        }
        else { console.log("No aplica descuento");
        descuento = 0; }
        console.log("El precio total a pagar es "+(total-descuento));
        break;
    }
}