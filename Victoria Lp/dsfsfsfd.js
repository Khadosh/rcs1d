/*const inputPersona = document.querySelector('#input-persona');
const botonAgregar = document.querySelector('#boton-agregar');
const listaPersona = document.querySelector('#lista-personas');

botonAgregar.addEventListener('click', function(){
  console.log(inputPersona.value)
  personas.push(inputPersona.value);
  console.log(personas);
  
})*/
/*let personas =[];

const inputPersona = document.querySelector('#input-persona');
const botonAgregar = document.querySelector('#boton-agregar');
const listaPersonas = document.querySelector('#lista-personas');

botonAgregar.addEventListener('click', function(){
    
 personas.push(inputPersona.value);
  
  let textoListaPersonas= '';
  
 for (let i = 0; i < personas.length; i++){
   textoListaPersonas = textoListaPersonas + '<li>' + personas[i] + '</li>';
   
 }
  listaPersonas.innerHTML = textoListaPersonas;
})*/
/*let personas=[];

const inputPersona = document.querySelector('#input-persona');
const botonAgregar = document.querySelector('#boton-agregar');
const listaPersonas = document.querySelector('#lista-personas');

botonAgregar.addEventListener('click', function(){
 personas.push(inputPersona.value);
  
  let textoListaPersonas= '';
  
  personas.forEach(function(element){
    
    textoListaPersonas = textoListaPersonas + '<li>' + element + '</li>';
    
  })
  
  listaPersonas.innerHTML = textoListaPersonas;
});
*/
let personas=[];

const inputPersona = document.querySelector('#input-persona');
const botonAgregar = document.querySelector('#boton-agregar');
const listaPersonas = document.querySelector('#lista-personas');

botonAgregar.addEventListener('click', function(){
 personas.push(inputPersona.value);
  
  let textoListaPersonas= '';
  
  personas.forEach(function(element, index){
    
    textoListaPersonas = textoListaPersonas + '<li>' +  (index +1) + ' - ' + element + '</li>';
    
  })
  
  listaPersonas.innerHTML = textoListaPersonas;
  inputPersona.value= '';
});

