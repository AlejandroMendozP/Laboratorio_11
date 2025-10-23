let contadorPares = 0;
let contadorImpares = 0;
for(let i = 0; i < 10; i++){
    let numero = parseInt(prompt("Ingrese un número"));
    if (numero%2 == 0){
        contadorPares++;
    }
    else contadorImpares++;
}
console.log("La cantidad de numeros pares es "+contadorPares);
console.log("La cantidad de numeros impares es "+contadorImpares);