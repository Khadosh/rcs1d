function sumaArray(a1, a2) {
    let resultado = [];

    for (let i = 0; i < a1.length; i++) {
        resultado[i] = a1[i] + a2[i];
    }

    return resultado
}

let array1 = [2, 5, 7, 8, 10];
let array2 = [1, 4, 6, 7, 9];

let suma = sumaArray(array1, array2);

alert(suma);