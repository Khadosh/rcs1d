let tareas = [];
let ulTareas = document.getElementById('tareas');

let listarTareas = () => {
    ulTareas.innerHTML = '';
    tareas.forEach(function(item , index){
        console.log(item)
        ulTareas.innerHTML += `<li>${item}<button onclick="pasarProceso(${index})">Pasar a Proceso</button></li>`;
    })
}

let procesos = [];
let ulProcesos = document.getElementById('ulProcesos');


let listarProcesos = () => {
    ulProcesos.innerHTML = "";
    procesos.forEach(function (item , index) {
        ulProcesos.innerHTML += `<li><button onClick="volver(${index})">Volver</button>${item}<button onClick="pasarCompletados(${index})">Pasar Completados</button></li>`
         
    })
}
let pasarProceso = (i) => {
    procesos.push(tareas[i]);
    tareas.splice(i, 1);
    listarTareas();
    listarProcesos();
   
} 

let agregarTarea = () => {
    let inputText = document.getElementById('tareaInput').value;
    tareas.push(inputText);
    document.getElementById('tareaInput').value = '';
    listarTareas()
}

let volver = (i) => {
    tareas.push(procesos[i]);
    procesos.splice(i, 1);
    listarTareas();
    listarProcesos();
   
} 

let completado = [];
let ulCompleto = document.innerHTML("ulCompleto");

let listarCompletado = () => {
    ulCompletado.innerHTML = "";
    ulCompletado.forEach(function (item , idex){
        ulCompleto.innerHTML += `<li>$(item)><li>`; 
    })
}



listarTareas();
listarProcesos();



