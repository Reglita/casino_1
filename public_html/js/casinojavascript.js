
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








/*//coockies para el nombre del usuario
 function setCookie(cname,cvalue,exdays) {
 var d = new Date();
 d.setTime(d.getTime() + (exdays*24*60*60*1000));
 var expires = "expires=" + d.toGMTString();
 document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }
 
 function getCookie(cname) {
 var name = cname + "=";
 var decodedCookie = decodeURIComponent(document.cookie);
 var ca = decodedCookie.split(';');
 for(var i = 0; i < ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) == ' ') {
 c = c.substring(1);
 }
 if (c.indexOf(name) == 0) {
 return c.substring(name.length, c.length);
 }
 }
 return "";
 }
 
 function checkCookie() {
 var user=getCookie("username");
 if (user != "") {
 alert("Hola de nuevo " + user);
 } else {
 user = prompt("Su nombre por favor:","");
 if (user != "" && user != null) {
 setCookie("username", user, 30);
 }
 }
 }*/







