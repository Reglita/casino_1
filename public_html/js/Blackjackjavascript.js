$(function () {

    var baraja;
    var banca;
    var jugador;
    var saldo = getCookie("saldo");
    if (saldo === null) {
        saldo = 100;
        setCookie("saldo", saldo, 90);
    }


    $("#saldo").html(saldo);

    $('#jugarBJ').click(function () {
        iniciarJuego();
    });


    $('#pedirBJ').click(function () {
        saldo--;
        pedir();
        setCookie("saldo", saldo, 90);
        $('#saldo').html(saldo);
    });


    $('#plantarseBJ').click(function () {
        plantarse();
    });

    $('#reiniciarBJ').click(function () {
        iniciarJuego();
        saldo = getCookie("saldo");
        $(this).hide();
    });


    function pedir() {
        jugador.push(baraja.pop());
        mostrar('cartaJ', jugador, false);
        var sumaPunt = puntuacion(jugador);
        $('#puntos').html("Tu puntuacion es: " + sumaPunt);
        if (sumaPunt > 21) {
            pierdes();
        }


    }

    function plantarse() {
        $('#pedirBJ').hide();
        mostrar('cartaB', banca, false);
        puntuacion(banca);
        $('#puntosBanca').html("Puntos banca: "
                + puntuacion(banca));
        while (puntuacion(banca) < 17) {
            banca.push(baraja.pop());
        }
        mostrar('cartaB', banca, false);
        puntuacion(banca);
        $('#puntosBanca').html("Puntos banca: "
                + puntuacion(banca));
        if (puntuacion(banca) >= puntuacion(jugador) && puntuacion(banca) <= 21) {
            pierdes();
        } else {
            ganas();
        }
    }

    function pierdes() {
        $('#pedirBJ').hide();
        $('#plantarseBJ').hide();
        $('#fraseP').html("<h2>Pierdes </h2>");
        $('#jugarBJ').show();
        saldo -= 10;
        setCookie(saldo);
        if (saldo <= 0) {
            $('#fraseP').html("<h2>Game Over!</h2>");
            $('#reiniciarBJ').show();
            $('#jugarBJ').hide();

        }
    }

    function ganas() {
        $('#pedirBJ').hide();
        $('#fraseG').html("<h2>¡Has ganado! </h2>");
        $('#plantarseBJ').hide();
        $('#jugarBJ').show();
        //saldo++;
        saldo += 10;
        setCookie(saldo);
    }

    function iniciarJuego() {
        baraja = getBaraja();
        banca = [];
        banca.push(baraja.pop());
        banca.push(baraja.pop());
        jugador = [];
        jugador.push(baraja.pop());
        jugador.push(baraja.pop());
        mostrar('cartaB', banca, true);
        mostrar('cartaJ', jugador, false);
        $('#puntos').html("Tu puntuacion es: " + puntuacion(jugador));
        $('#fraseP').html("");
        $('#fraseG').html("");
        $('#puntosBanca').html("");
        $('#jugarBJ').hide();
        $('#pedirBJ').show();
        $('#plantarseBJ').show();

    }

    function puntuacion(punt) {
        var puntos = 0;
        var ases = false;
        for (var i = 0; i < punt.length; i++) {
            puntos += valor(punt[i]);
            if (valor(punt[i]) === 1) {
                ases = true;
            }
        }
        if (ases && puntos + 10 <= 21) {
            puntos += 10;
        }
        return puntos;
    }

    function valor(cadena) {
        var valor = parseInt(cadena.slice(0, -1));
        if (valor > 10) {
            valor = 10;
        }
        return valor;
    }

    function mostrar(selector, punt, esconder) {
        $('#' + selector).html("");
        for (var i = 0; i < punt.length; i++) {
            if (esconder === true && i === 0) {
                $('#' + selector).append('<img src="images/BlackJack/d1.png" >');
            } else {
                $('#' + selector).append('<img src="images/BlackJack/' + punt[i] + '.png" >');
            }
        }
    }

    function getBaraja() {
        var bar = [];
        var colores = "cpdt";
        for (var i = 1; i <= 13; i++) {
            for (j = 0; j < colores.length; j++) {
                bar.push(i + colores.charAt(j));
            }
        }
        bar.sort(function () {
            return 0.5 - Math.random();
        });
        return bar;
    }


});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}