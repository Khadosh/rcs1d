let tareas = ['Tarea1', 'tarea2'];
let ulTareas = document.getElementById('tareas');
let listarTareas = () => {
    ulTareas.innerHTML = '';
    tareas.forEach(function(item, index) {
        console.log(item);
        ulTareas.innerHTML += `<li>${item}<button onclick="pasarProceso(${index})">Pasar a Proceso</button></li>`;
    })
}
let process = [];
let pasarProceso = (i) => {
    process.push(tareas[i]);
    tareas.splice(i, 1);
    listarTareas();

}
listarTareas();

function btnAddTask() {
    let inputText = document.getElementById('taskInput').value;
    tareas.push(inputText);
    document.getElementById('taskInput').value = '';
    listarTareas()
}