export function calcularImc(alumno){
    let imc = alumno.peso / (alumno.altura * alumno.altura);
    document.write("El IMC de ${alumno.nombre} es ${imc}")

}
