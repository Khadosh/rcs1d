/*let i = 0;
while (i < 15){
    console.log("RollingFest");
    i++
}

 let j = 0;
do {
    console.log("Rolling Fest");
    j++;
} while (j<16)

 for (let i = 0; i < 17; i++){
    console.log("Rolling Fest");
}*/

let total = 0;
let numero = 0;
while (numero !== null) {
    numero = prompt("Ingrese un numero");

    console.log("numero")

   if(numero !== null){
      total = total + parseInt(numero);
   }
}
alert(total);

