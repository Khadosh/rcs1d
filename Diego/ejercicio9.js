
let contador = 1;

for (let i = 1; i <=500 ; i++) {
    document.write(i + "<br>")
    if (i % 4 == 0){
        document.write("Es multiplo de 4 <br>")
    }
    if (i % 9 == 0){
        document.write("Es multiplo de 9 <br>")
    }
    if (contador < 5) {
        contador++;
        
    }
    else {
        document.write("<hr>")
        contador = 1;
    }
         
};
    
    
