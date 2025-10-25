let presupuesto = parseInt(prompt("Ingrese su presupuesto:"));
let total = 0;

while (true) {
    let producto = parseInt(prompt("Ingrese el precio del producto:"));
    if (total + producto > presupuesto) {
        console.log("Este producto excede su presupuesto");
    } else {
        total += producto;
    }
    if (total >= presupuesto) {
        console.log("Ha alcanzado su presupuesto máximo");
        break;
    }
    let continuar = prompt("¿Desea añadir más productos? S/N");
    if (continuar.toLowerCase() === "n") {
        break;
    }
}
console.log("El total es " + total);

if (total > 100) {
    descuento = total * 0.10;
    console.log("Tiene un descuento del 10%");
} else if (total >= 50 && total <= 100) {
    descuento = total * 0.05;
    console.log("Gana un cupón del 5%");
} else {
    console.log("No aplica descuento");
    descuento = 0;
}

console.log("El precio total a pagar es " + (total - descuento));