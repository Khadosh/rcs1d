var listaDeLibros = ['20000 leguas de viaje submarino', ' El Principito', ' Steve Jobs'];
window.onload = function() {
    var rentedBooks = document.getElementById('Libros');
    listaDeLibros.forEach(function(book) {
        var element = document.createElement('li');
        element.innerText = book;
        rentedBooks.appendChild(element);
    });
};

// rent
document.getElementById('alquilar').addEventListener('click', alquilar);


function alquilar(titulo) {
    listaDeLibros.indexOf('20000 leguas de viaje submarino');
    listaDeLibros.splice(0);
}

// return
function devolver(titulo) {

}