function sumaArray(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let parcial = 0;
        for (let j = 0; j < element.length; j++) {
            parcial = parcial + element[j];
        }
        resultado[i] = parcial;
    }
    return resultado;
}

let array = [
    [1, 4],
    [5, 7, 8],
    [2, 10, 20]
];


let suma = sumaArray(array);
console.log(suma);