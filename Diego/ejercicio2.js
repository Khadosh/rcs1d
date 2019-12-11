let numero = prompt("numero 0-10");
numero = parseInt (numero);
if (numero <= 2 && numero >=0){
    alert("Muy deficiente");
} else {
    if (numero <=4 && numero >=3){
        alert("Insuficiente");
    } else {
        if (numero <=6 && numero >=5){
            alert("Suficiente");
        } else {
            if (numero ==7){
                alert("bien");
            } else {
                if (numero <=9 && numero >=8){
                    alert("Notable");
                } else {
                    if (numero ==10){
                        alert("Sobresaliente");
                    } else {
                        if (numero < 0 || numero > 10 ){
                            alert("numero erroneo");
                        } else {
                            alert("Introduce un numero valido")
                        }
                    }
                }
            }
        }
    }
}





