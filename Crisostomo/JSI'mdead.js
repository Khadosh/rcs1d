let _materias = ['Fisica', 'Matematicas', 'Quimica']
let _alumnos = ['Joe', 'Mama', 'HAHA']
let _notas = [
    [9, 8, 9],
    [3, 6, 3],
    [2, 4, 8]
]

function dibujarTabla(materias, alumnos, notas) {

    document.write('<table class="tablita">')
    document.write('<thread>')
    document.write('<tr>')
    document.write('<td/>')
    for (let i = 0; i < materias.length; i++) {
        let materia = materias[i];
        document.write('<td>' + materia + '</td>');
    }
    document.write('</tr>');
    document.write('</thread>')

    document.write('<tbody>')
}