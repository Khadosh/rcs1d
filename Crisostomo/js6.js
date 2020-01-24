/*function sumaArray(array1, array2) {
    let resultado = [];

    for (let i = 0; i < array1.length; i++) {
        let element1 = array1[i];
        let element2 = array2[i];
        let parcial1 = 0;
        let parcial2 = 0;

        for (let x = 0; x < element1.length; x++) {
            parcial1 = parcial1 + element1[x];
        }
        for (let x = 0; x < element2.length; x++) {
            parcial2 = parcial2 + element2[x];
        }
        resultado[i] = parcial1 + parcial2;
    }
    return resultado;
}

let array1 = [
    [1, 5],
    [6, 7, 8],
    [4, 7, 8, 9]
]
let array2 = [
    [1, 5],
    [6, 7, 8],
    [4, 7, 8, 9]
]

let suma = sumaArray(array1, array2)
console.log(suma)*/

let materias = ['fisica', 'quimica', 'matematica']
let alumnos = ['pedro', 'pepito', 'joe mama']
let notas = [
    [9, 3, 6],
    [6, 3, 9],
    [3, 9, 6]
]