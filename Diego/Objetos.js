

/*crear el constructor de una clase alumno que tenga: Nombre , altura, peso
Generar una instancia
crear un metodo que de el IMC del alumno
resultado "el imc de Juancito es 25,5"*/
/*
class Alumno{
    constructor(nombre,peso,altura){

        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}
 function calcularImc(alumno){
    const imc = alumno.peso / (alumno.altura * alumno.altura);
    document.write("El IMC de ${alumno.nombre} es ${imc}");

}
const alumno = new Alumno("Juancito" , 175 , 80);
calcularImc(alumno);*/


/*montonuevo = parseInt(prompt("Ingrese Dinero"));
let extraer = parseInt(prompt("Cuanto dinero quiere retirar"));


class Cuenta {
   constructor(nombre){
       this.titular =nombre
       this.saldo = 0
   }
    
   
   agregarDinero(montonuevo){
       
       this.saldo = this.saldo + montonuevo;
       
   }

   extraerDinero(extraer){
       if (this.saldo < extraer) {
           alert("no hay saldo");
           return; 
       }
       this.saldo = this.saldo - extraer ;
       
       
   }
   informar(informe){
       
       alert("Su saldo es" + " " + this.saldo);
       
       

   }

}

let cuenta = new Cuenta("alex");
console.log(cuenta);
cuenta.agregarDinero(montonuevo)
console.log(cuenta);
cuenta.extraerDinero(extraer);
console.log(cuenta);
cuenta.informar();
console.log(cuenta);*/

/*class Rectangulos {
    constructor (alto,ancho,perimetro,area){
        this.alto = alto;
        this.ancho = ancho;
        this.perimetro = perimetro;
        this.area = area;
        document.write(`el rectangulo tiene un alto de ${this.alto} y un ancho de ${this.ancho}` + "<br>");
    }
    

    modificar(){
     
    
        this.perimetro = 2 * (this.alto + this.ancho);
        
        this.area = (this.alto * this.area)/2;

    }
    mostrar(){
        document.write(`El perimetro del rectangulo es ${this.perimetro} + "<br>"`);  
        document.write(`El area del rectangulo es ${this.area} + "<br>" `);
    }
    
}

var rectangulos = new Rectangulos (parseInt(prompt("ingrese el alto del rectangulo")), parseInt(prompt("ingrese el ancho del rectangulo")));
rectangulos.mostrar();*/


/*        let codigo = prompt("escibir el codigo");
        let nombre = prompt("Ingrese el nombre");
        let precio = prompt("Indique el precio");

 class Producto {
    constructor() {
        this.codigo = codigo;
        this.nombre = nombre ;
        this.precio = precio;
    }
    imprimeDatos(){
        document.write(`El codigo del producto es ${this.codigo}  <br>`);
        document.write(`El nombre del producto es ${this.nombre}  <br>`);
        document.write(`El precio del producto es $ ${this.precio}  <br>`);
        
    }
}

var producto = new Producto1[a20,Celular,20500];
var producto = new Producto2[a50,Celular,27500];
var producto = new Producto3[a8,Celular,30500];
producto.imprimeDatos();*/

// GENERACIONES
let anioNacimiento = (parseInt(prompt("ingrese año de nacimiento")));
class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }
    mostrarGeneracion() {
        if (anioNacimiento <= 1948 && anioNacimiento >= 1930) {
            alert("Silent Generation, Caracteristica generacional: `Austeridad`");
        }
        else {
            if (anioNacimiento <= 1968 && anioNacimiento >= 1949) {
                alert("Baby Boom, Caracteristica generacional: `Ambicion`");
            }
            else {
                if (anioNacimiento <= 1980 && anioNacimiento >= 1969) {
                    alert("Generacion X, Caracteristica generacional: `Obsesion por el exito`")
                }
                else {
                    if (anioNacimiento <= 1993 && anioNacimiento >= 1981) {
                        alert("Generacion Y Millenials, Caracteristica generacional: `Frustanion`")
                    }
                    else {
                        if (anioNacimiento <= 2010 && anioNacimiento >= 1994)
                            alert("Generacion Z, Caracteristica generacional: `Irreverencia`");
                    }


                }
                esMayordeEdad(); {
                    if (anioNacimiento <= 2002 && anioNacimiento >= 1930) {
                        alert("Es mayor de edad");
                    }
                    else {
                        if (anioNacimiento <= 2020 && anioNacimiento >= 2003) {
                            alert("Es menor de edad");
                        }
                    }
                    mostrarDatos();{
                        console.log(constructor);

                    }
                    generarDNI();{
                        let Dni = Math.floor(Math.random() * 99999999 + 11111111);
                        document.write("DNI N° " + Dni);
                    }
                }
            }
        }
    }




}


var persona = new Persona;
persona.mostrarGeneracion();
persona.esMayordeEdad();
persona.mostrarDatos();
persona.generarDNI();















