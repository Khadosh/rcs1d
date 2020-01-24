let countDownDate = new Date('Jan 7, 2020 10:09:00').getTime();

let tiempo = setInterval(function() {
    let now = new Date().getTime();
    let diferencia = countDownDate - now;
});

let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
let horas = Math.floor((diferencia % ()))