// ENUNCIADO

// 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.



let resultado = 0;
let numero = 0

while(numero !== null){
    numero = prompt('ingresa un numero');
    
    if(numero !== null){
        resultado = resultado + parseInt(numero);
    }
}
    alert(resultado);
