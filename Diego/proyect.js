let trabajos = JSON.parse(localStorage.getItem("trabajos")) || [];

let tarea = document.getElementById("realizar");
listaDeTareas();

  function listaDeTareas() {
    let mandados = JSON.parse(localStorage.getItem("trabajos")); 
    realizar.innerHTML = "";
 trabajos.forEach(function trabajo(trabajo, i) {

     realizar.innerHTML += `<li>${trabajo}<button onClick="agregarTarea${i}"> En Proceso </button> ` ;
     
 })
      
  }
  function agregarTarea() {
      let pedido = document.querySelector('#trabajo').value;
      trabajos.push(pedido)
      window.localStorage.setItem( "trabajos" , JSON.stringify(trabajos)); 
      listaDeTareas();
  }
  //añadir a progreso
let haciendo = JSON.parse(localStorage.getItem("haciendo")) || [];;
let progre = document.getElementById("progreso");

function trabajando(index) {
    haciendo.push(trabajos[index]);
    trabajos.splice(index, 1);
    localStorage.setItem("haciendo" , JSON.stringify(haciendo));
    localStorage.setItem( "trabajos" , JSON.stringify(trabajos)); 

    listaDeTareas();
    listaProgreso();
}

function listaProgreso() {
    progre.innerHTML = "";
    progre.forEach(function (trabajo , i) {
        progre.innerHTML = `<li>$(trabjo)<button onClick='progreso($i)'>Completado</button>`
        
    })
    
}