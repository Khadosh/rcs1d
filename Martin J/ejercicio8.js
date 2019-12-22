// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let numero = prompt('ingrese numero de repeticiones')

if(numero > 0 && numero <= 50){
    for(let i= 0; i <= numero; i++){
        for(let repe = 1; repe <= i; repe++){
            document.write(repe)
        }
        
        document.write('<br>');
    }

}else {
    alert('ingrese un numero valido');
}


