// Libros Disponibles

/*let librosDisponibles = ['Libro1', 'Libro2', 'Libro3'];

let ulDisponibles = document.getElementById('ulDisponibles');

listarDisponibles();

function listarDisponibles(){
    ulDisponibles.innerHTML = '';
    librosDisponibles.forEach(function(libro, i){
        console.log(libro, i);
        ulDisponibles.innerHTML += `<li>${libro} <button onclick="alquilarLibro(${i})">Alquilar</button></li>`;
    })
}

function agregarLibro(){
    let titulo = document.querySelector('#tituloLibro').value;
    librosDisponibles.push(titulo);
    listarDisponibles();

}

//  Libros Alquilar

let librosAlquilados = [];
let ulAlquilados = document.getElementById('ulAlquilados');

function alquilarLibro(index){
    librosAlquilados.push(librosDisponibles[index]);
    librosDisponibles.splice(index, 1);
    listarDisponibles();
    listarAlquilados();
}

function listarAlquilados(){
    ulAlquilados.innerHTML = '';
    librosAlquilados.forEach(function(libro, i){
        console.log(libro, i);
        ulAlquilados.innerHTML += `<li>${libro} <button onclick="devolverLibro(${i})">Devolver</button></li>`;
    })
}

function devolverLibro(index){
    librosDisponibles.push(librosAlquilados[index]);
    librosAlquilados.splice(index, 1);
    listarDisponibles();
    listarAlquilados();
}*/


let librosDisponibles = [];


let disponibles = document.getElementById('disponibles');
listaDisponibles();
function listaDisponibles() {
    let disp = JSON.parse(localStorage.getItem("librosDisponibles"));
    disponibles.innerHTML = "";
    librosDisponibles.forEach(function(libro , i) {
        
        disponibles.innerHTML += `<li>${libro} <button onclick="alquilarLibro(${i})">Alquilar</button>`;
        
    })

}

function agregarLibro() {
    let titulo = document.querySelector('#tituloLibro').value;
    librosDisponibles.push(titulo);

    window.localStorage.setItem( "librosDisponibles" , JSON.stringify(librosDisponibles)); 
    listaDisponibles();

}

//alquilar

let librosAlquilados = [];
let alquilados = document.getElementById('alquilados');

function alquilarLibro(index) {
    
    librosAlquilados.push(librosDisponibles[index]);
    librosDisponibles.splice(index , 1);
    listaAlquilados();
    listaDisponibles();
}

function listaAlquilados() {
    let dispo = JSON.parse(localStorage.getItem("librosAlquilados"));
    alquilados.innerHTML = "";
    librosAlquilados.forEach(function(libro, i) {
        alquilados.innerHTML += `<li>${libro}<button onclick= 'devolver(${i})'> Devolver</button>`;
       
    })

    
}
function devolver(index) {
    window.localStorage.setItem( "librosAlquilados" , JSON.stringify(librosAlquilados));
    librosDisponibles.push(librosAlquilados[index]);
    librosAlquilados.splice(index, 1);
    listaDisponibles();
    listaAlquilados();
    
}





