
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

/*const personas = ["Gonzalo","Esteban", "Sergio","Victoria", "Nicole"]

function saludo (nombre) {
    return "Hola " + nombre + "!";
}

for (let i = 0; i < personas.length; i++) {
    console.log(saludo(personas[i]))
}*/

/*let personas = ["Pepe","Ignacio", "Benicio"];
let personas2 = ["Pepe2","Ignacio", "Benicio"];



personas.forEach(function(elemento) {
    console.log(elemento);
});
personas.forEach(function(elemento, index) {
    console.log(elemento);
    if (index == 0) console.log("capitan");
});

const callback = function(elemento,idex){
    console.log(elemento);
    if  (index == 0){
        console.log("capitan")
    }
}

personas.forEach(callback);
personas2.forEach(callback);*/

// crear una funcion que devuelva un array, sumando cada valos de 2 array distintos.


/*function suma(a1 , a2)  {
    var resultado = [];
    for (let i = 0; i < a1.length; i++) {
        resultado[i] = a1[i] + a2[i];
    }
    return resultado; 
}

var array1 = [1, 3, 5, 7, 9];
var array2 = [2, 4, 6, 8, 10];

const suma3 = suma(array1, array2);

console.log(suma3);*/

//crear una funcion que devuelva un Array, sumando los dos arrays y cada valor los arrays anidados.

//funcion ---> nombre de la funcion, los parametros que recibe.
/*const array1 = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
const array2 = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
//resultado [9,9,25]

function sumaArray(array1, array2) {

    var resultado = [];
    for (let i = 0; i < array1.length; i++) {
        var element1 = array1[i];
        var element2 = array2[i];

        let parcial = 0;

        for (let j = 0; j < element1.length; j++) {
            parcial = parcial + element1[j] + element2[j];
        }
        resultado[i] = parcial;
    }
    
    return resultado
}

var suma = sumaArray(array1, array2);
console.log(suma)*/

let materias = ["Matematicas", "Fisica", "Quimica"];
let alumnos = ["Juan", "Pedro", "Pablo"];
let notas = [[9, 6, 3], [6, 3, 8], [9, 8, 9]]

function dibujarTabla() {
    

document.write("<table>");
document.write("<thead>");
document.write("<tr>");
document.write("<td />");
for (let i = 0; i < materias.length; i++) {
    var materia = materias[i];
    document.write("<td>" + materia + "</td>");

}
document.write("</tr>");
document.write("</thead>")

document.write("<tbody>");

for (let j = 0; j < alumnos.length; j++) {
    document.write("<tr>");
    var alumno = alumnos[j];
    var notasAlumno = notas[j]
    document.write("<td>" + alumno + "</td>");
    for (let k = 0; k < notasAlumno.length; k++) {
        var nota = notasAlumno[k];
        document.write("<td>" + nota + "</td>");

    }
    document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
}
dibujarTabla();



