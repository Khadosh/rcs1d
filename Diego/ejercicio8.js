
/*for ( let i =prompt("ingrese un numero") ; i >= 0; i++){
    
                
    document.write(i)
    }
}*/

let arr = [5, 4, 3, 2, 1 ];
console.log(arr);

arr.reverse();
console.log(arr);

arr = arr.map(function(elem){
    elem *= elem ;
    return elem;
      
});
console.log(arr);

arr = arr.map( Math.sqrt); //raiz cuadrada
console.log(arr);

arr = arr.join(".."); //copia y pega el arreglo con las comas. Podemos ponerle .. O LO QUE SEA PARA SEPARAR
console.log(arr); 

arr = arr.split(".."); // corta el arreglo por donde le indiquemos
console.log(arr);

arr.push("6"); //agrega un elemento en la ultima posicion del arreglo
console.log(arr);

arr.unshift("0"); //agrega un elemento en la primer ubicacion del arreglo.
console.log(arr);

console.log( arr.toString() ); //pone la representacion textual del arreglo. parecido al split

let elimine = arr.pop();  //elimina el ultimo elemento del array y lo pone en la variable.
console.log( arr , elimine);

arr.splice( 1 , 1 , "10"); //el primer numero nos indica la pocision en la cual queremos trabajar.
                        // aqui le decimos. anda la posicion 1 y desde alli elimina 1 elemento
                        // el tercer elemento es para agregar algo.
console.log(arr);

arr.slice(0,3); //es la poscision desde donde quiero cortar.
console.log(arr);
