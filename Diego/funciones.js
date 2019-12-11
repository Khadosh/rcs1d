
//funcion ----> entrada, cuerpo, salida
//entrada
/*const nombre1 = "Gonzalo";
const apellido1 = "mercado";

const nombre2 = "pepe";
const apellido2 = "gomez";

//cuerpo
function saludo (nombre,apellido) {
    console.log("Hola" + nombre + "" + apellido);

}

//salida
saludo(nombre1, apellido1);
saludo(nombre2, apellido2);
*/
// variantes de funciones

/*function suma  (n1, n2) {
    return (n1 + n2)
}
let resultado = suma (15, 20);
console.log(resultado);*/
/*let resultado;
let resultado2;

function suma (n1 , n2) {
    return (n1 + n2)

}
resultado = suma (20,30);
resultado2 = suma(resultado , 10);

 console.log(resultado);
 console.log(resultado2);*/
 /*const nombre ="Diego";
 const apellido ="Olmi";

 function saludo (nombre,apellido){
    console.log("Hola " + nombre + " " + apellido);    
 }
 saludo (nombre,apellido)*/
 
const personas = ["Gonzalo","Esteban", "Sergio","Victoria", "Nicole"]

function saludo (nombre) {
    return "Hola " + nombre + "!";
}

for (let i = 0; i < personas.length; i++) {
    console.log(saludo(personas[i]))
}

