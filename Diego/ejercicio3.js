let cadenas = [];
let i = 0; 
let cadena = prompt("ingrese cadena");
while (cadena != null) {
    cadenas[i] = cadena+"-";
    i++;
    cadena = prompt("ingrese cadena");
}

alert(cadenas);
