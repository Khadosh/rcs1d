//ENUNCIADO

// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

let resultado = '';

do{
    let cadena = prompt('ingrese un texto');

    if(resultado == ''){
        resultado = resultado + cadena;

    }else {
        resultado = resultado + '-' + cadena;
    }
} while(confirm('Desea seguir?')){
    document.write(resultado);
}