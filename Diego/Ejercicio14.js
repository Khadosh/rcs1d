let cadena = prompt("Ingrese un texto");

let caracteres = cadena.length;

let caracter;

for (let i = 0; i < caracteres; i++) {
    caracter = cadena.charAt(i);
    if (i == caracteres - 1) {
        document.write(caracter);
    }
    else{
        document.write(caracter + "-");
    }
}

