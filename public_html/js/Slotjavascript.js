


$(function () {
    var saldo = getCookie("saldo");
    if (saldo === null) {
        saldo = 100;
        setCookie("saldo", saldo, 90);
    }

    $("#saldo").html(saldo);

   

    $("#jugar").click(function () {
        var premios = [25, 50, 100, 300, 500, 1000];
        saldo--;
        var pos = [];
        pos[0] = Math.floor(Math.random() * 6);
        pos[1] = Math.floor(Math.random() * 6);
        pos[2] = Math.floor(Math.random() * 6);
        $("#pos1").attr("src", "images/fruta/slot" + pos[0] + ".png");
        $("#pos2").attr("src", "images/fruta/slot" + pos[1] + ".png");
        $("#pos3").attr("src", "images/fruta/slot" + pos[2] + ".png");
        $('#pos1').fadeIn(500);
        $('#pos2').hide();
        $('#pos2').fadeIn(500);
        $('#pos3').hide();
        $('#pos3').fadeIn(500);




        if (pos[0] === pos[1] && pos[0] === pos[2] && pos[1] === pos[2]) {
            saldo += premios [pos [2]];
            $('#ganado').html("Ha ganado: " + premios[pos [1]] + "€");
        }

        setCookie("saldo", saldo, 90);
        $('#saldo').html(saldo);

    });
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






