
let nombre1 = prompt("Ingrese un nombre");
let edad1 =parseInt(prompt("Ingrese la Edad"));

let nombre2 = prompt("Ingrese un nombre");
let edad2 =parseInt(prompt("Ingrese la Edad"));

let nombre3 = prompt("Ingrese un nombre");
let edad3 =parseInt(prompt("Ingrese la Edad"));


let mayor = Math.max(edad1,edad2,edad3);

if (mayor == edad1) {
    alert("El mayor es" + " " + nombre1);
    
}

if (mayor == edad2) {
    alert("El mayor es" + " " + nombre2);
    
}
if (mayor == edad3) {
    alert("El mayor es" + " " + nombre3)
    
}