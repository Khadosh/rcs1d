//Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("ingrese un texto")

let vocales = texto.length;

texto = texto.toUpperCase();

let contador = 0; 

let voc

for (let i = 0; i < vocales; i++) {

    voc = texto.charAt(i);
    if((voc == "A") || (voc == "E") ||(voc == "I") ||(voc == "O") ||(voc == "U")){
        contador++
    }
    
}
document.write("El numero de vocales es" + " " + contador + ".");