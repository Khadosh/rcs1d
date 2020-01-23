var listaDeTareas = [];
var form = document.getElementById('formTarea');
var botonEliminar = document.getElementById('eliminar');

function mostrarLista(lista, nodo) {
  nodo.innerHTML = '';

  for (let i = 0; i < listaDeTareas.length; i++) {
    const tareaAMostrar = listaDeTareas[i];
    const nodoLista = document.createElement('li');
    const nodoTexto = document.createTextNode(tareaAMostrar);
    nodoLista.appendChild(nodoTexto);
    nodo.appendChild(nodoLista);
  }
}

function agregarElemento(elemento, lista) {
  if(elemento) {
    lista.push(elemento);
  }
}

function eliminarUnElemento(lista){
  lista.pop();
}

form.addEventListener('submit', function(evt) { 
  evt.preventDefault();
  var datosForm = evt.target;

  const tarea = datosForm['tarea'].value;
  agregarElemento(tarea, listaDeTareas);

  const tareas = document.getElementById('tareas');
  
  mostrarLista(listaDeTareas, tareas);
})


botonEliminar.addEventListener('click', function(){
  eliminarUnElemento(listaDeTareas);
  const tareas = document.getElementById('tareas');
  mostrarLista(listaDeTareas, tareas);
});