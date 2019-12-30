

function reloj() {
    var fecha = new Date();
    console.log(fecha);
    
    var dia = fecha.getDate();
    console.log(dia);
    
    var semana = ["Domingo" , "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    console.log(semana[Dia]);
    
    var sabado = document.getElementById("diaSemana");
    sabado.innerText = semana[dia];
    
    var anio = fecha.getFullYear();
    console.log(anio);
    
    var mes = fecha.getMonth();
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio";"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    console.log(meses[mes]);
    
    var Diciembre = document.getElementById("mes");
    Diciembre.innerText = meses[mes];
    
    var dia1 = fecha.getDate();
    console.log(dia1);
    
    var tiempo
    var horas = fecha.getHours();
    console.log(horas);
    var minutos = fecha.getMinutes();
    console.log(minutos);
    var segundos = fecha.getSeconds();
    console.log(segundos);
    
    var hora = document.getElementById("horas");
    hora.innerText = horas;
    var minuto = document.getElementById("minutos");
    segundos.innerText = minutos
    var segundos = document.getElementById("segundos");
    segundos.innerText = segundos
}

var inter;

function start() {
    inter = window.SetInterval ("reloj()", 1000)
    
}

function stop() {
    window.clearInterval (inter);
}
