let dni = 0
while ( dni != null){
    dni = prompt("Ingrese DNI");
    console.log(dni);

if (dni >= 0 && dni <= 99999999 && dni != null){
    let resto = dni % 23;
    let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    alert(letras[resto]);
    
} else if (dni != null) {
    alert("DNI No valido");
} 

}
