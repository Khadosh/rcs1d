let materias = ["Matematicas", "Fisica", "Quimica"];
let alumnos = ["Juan", "Pedro", "Pablo"];
let notas = [[9, 6, 3], [6, 3, 8], [9, 8, 9]]

function dibujarTabla() {
    

document.write("<table>");
document.write("<thead>");
document.write("<tr>");
document.write("<td />");
for (let i = 0; i < materias.length; i++) {
    var materia = materias[i];
    document.write("<td>" + materia + "</td>");

}
document.write("</tr>");
document.write("</thead>")

document.write("<tbody>");

for (let j = 0; j < alumnos.length; j++) {
    document.write("<tr>");
    var alumno = alumnos[j];
    var notasAlumno = notas[j]
    document.write("<td>" + alumno + "</td>");
    for (let k = 0; k < notasAlumno.length; k++) {
        var nota = notasAlumno[k];
        document.write("<td>" + nota + "</td>");

    }
    document.write("</tr>");
}
document.write("</tbody>");
document.write("</table>");
}
dibujarTabla();




  



