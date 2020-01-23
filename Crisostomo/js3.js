/*for (let i = prompt('Ingrese un numero menor de 50'); i >= 1; i--) {
    for (let a = 0; a < i; a++) {
        document.write(i)
    }
    document.write('<br>')
}

for (let i = prompt('Ingrese un numero NO mayor que 50'); i >= 50; i++) {
    for (let a = 0; a < i; ++1) {
        document.write(i)
    }
    document.write('<br>')
}*/

// 1: Pedir cadenas de texto
// 2: Seguir pidiendo cadenas de texto hasta presionar "cancelar"
// 3: Al presionar "cancelar" se deben mostrar las cadenas de texto

let textoIngresado = prompt('Ingrese texto aquí', '')
let pregunta = confirm('Desea ingresar más texto?')

if (textoIngresado != '') {
    console.log(textoIngresado)
}