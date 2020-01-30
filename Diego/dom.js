/*let numeroAleatorio = 0;

function comenzarJuego() {
    numeroAleatorio = Math.floor(Math.random()*10 + 1);
    console.log(numeroAleatorio);
}
function adivinar() {
    let a = document.getElementById("Numero").value;
    console.log(a);
    if (a == numeroAleatorio) {
        let alerta = document.getElementById("resultado");
        alerta.innerText = "Adivinaste!!!"
        
         
    } else {
        if (a < numeroAleatorio) {
            let alerta = document.getElementById("resultado");
            alerta.innerText = "Tu numero magico debe ser Mayor"
            
        }
        else {
            let alerta = document.getElementById("resultado");
            alerta.innerText = "Tu numero magico debe ser Menor"
            
        }
    } 
}*/

//let anioDeNacimiento = (parseInt(prompt("ingrese año de nacimiento")));
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioDeNacimiento) {
        this.nombre = nombre ;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioDeNacimiento = anioDeNacimiento;
    }
    mostrarGeneracion() {
      //  let a = document.getElementById("anioDeNacimiento");
        if (this.anioDeNacimiento <= 1948 && this.anioDeNacimiento >= 1930) {
            alert("Pertenece a la generacion: Silent Generation, Rasgo caracteristico: Austeridad")
 
        }
        else {
            if (this.anioDeNacimiento <= 1968 && this.anioDeNacimiento >= 1949) {
                alert("Pertenece a la generacion: Baby Boom, Rasgo caracteristico: Ambicion")
            }
            else {
                if (this.anioDeNacimiento <= 1980 && this.anioDeNacimiento >= 1969) {
                    alert("Pertenece a la generacion: Generation , Rasgo caracteristico: Obsesion por el Exito")
                }
                else {
                    if (this.anioDeNacimiento <= 1993 && this.anioDeNacimiento >= 1981) {
                        alert("Pertenece a la generacion: Generation Y,  Rasgo caracteristico: Frustracion")
                    }
                    else {
                        if (this.anioDeNacimiento <= 2010 && this.anioDeNacimiento >= 1994) {
                            alert("Pertenece a la generacion: Generation Z, Rasgo caracteristico: Irreverencia")
                        }
                    }
                }
            }
        }
    }
    esMayordeEdad(){
        if (this.anioDeNacimiento <= 2003 ) {
            //alert("Es mayor de edad");
            
        }
    }
    enviarFormulario(){
        
    }
}

const mostrarDatos = () => {
    const name = document.getElementById('nombre');
    const persona = new Persona(name);
    persona.mostrarGeneracion();
    persona.esMayordeEdad();
    persona.mostrarDatos();
}

//eventos
//onload es todos los componentes que tiene el DOM a la hora que se dibuja
/*document.body.onload = function () {
    alert('Hola mundo');
    
}*/


// var ListaDeTareas = [];
// var form = document.getElementById('formTarea');

// form.addEventListener('submit', function(evt) {
//     evt.preventDefault();
//     var datosTarea = evt.target

//     const nombre = datosTarea['tarea'].value;
//     if (tarea !== '') {
//         ListaDeTareas.push(tarea);
//         const tareas = document.getElementById('tareas');
        
//     }
// });


// Tarea

// crear un sistema de registro de una libreria
// se muestren los libros disponibles que se pueda alquilar un libro y se pueda devolver el libro
// cuando se alquile o devuelva un libro debe actualizarse los libros disponibles. 








//const boton = document.getElementById('mostrar');

// vincular el elemento con un evento.
//boton.addEventListener('click', mostrar); // tiene dos parametros primer lugar el vento, y luego la funcion que va a ejecutar.

// FORMULARIOS
//var form = document.getElementById('form') // capturamos el evento

// vinculamos el elemento a un evento (submit)
// form.addEventListener('submit', function (evt) {
//     //prevenimos el comportamiento por defecto
//     evt.preventDefault();
// })

// todolist  lista por hacer
// imput(tareas a realizar), button(agregar la tarea); mostrar la lista de tareas.
