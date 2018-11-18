
$(function () {

    var saldo = getCookie("saldo");
    if (saldo === null) {
        saldo = 100;
        setCookie("saldo", saldo, 90);
    }
    var suma;
    
     $("#saldo").html(saldo);


    $('#jugarD').click(function () {
        saldo--;
        suma = jugar();
        if (suma === 7 || suma === 11) {
            saldo++;
            getCookie(saldo);
            $('#resD').html("<h3>¡Has ganado!</h3>");
        } else if (suma === 2 || suma === 3 || suma === 12) {
            saldo--;
            getCookie(saldo);
            $('#resD').html("<h3>Has perdido</h3>");
        } else {
            $(this).hide();
            $('#resD').html("Saca: " + suma);
            $('#tirar').show();
        }
        
         setCookie("saldo", saldo, 90);
        $('#saldo').html(saldo);
    });

    $('#tirar').click(function () {
        var suma2 = jugar();
        if (suma2 === suma) {
            saldo++;
            $('#resD').html("<h3>Has ganado</h3>");
            iniciar();
        } else if (suma2 === 7) {
            saldo -= 2;
            $('#resD').html("<h3>Has perdido</h3>")
            iniciar();
        }
    });




    function iniciar() {
        $('#tirar').hide();
        $('#jugarD').show();
        $('#resD').html("");
        getCookie(saldo);

    }


    function jugar() {
        var res1 = Math.floor(Math.random() * 6 + 1);
        var res2 = Math.floor(Math.random() * 6 + 1);
        var suma = res1 + res2;
        $('#dadoUNO').attr('src', "images/dados/dado" + res1 + ".png");
        $('#dadoDOS').attr('src', "images/dados/dado" + res2 + ".png");
        $('#dadoUNO').hide();
        $('#dadoUNO').fadeIn(500);
        $('#dadoDOS').hide();
        $('#dadoDOS').fadeIn(500);
        return suma;
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














