let efectivo = 300,
credito = 600,
disponible = efectivo + credito
totalCarrito = 500;

if(totalCarrito < efectivo || totalCarrito < credito ) {
    console.log("Puedo pagar");  
}else if(totalCarrito < disponible){
    console.log("Puedo pagar")
}
else {
    console.log("No puedo pagar");
}