var c = document.getElementById("setmode_container");
var csuszka = document.getElementById("csuszka");
var sun = document.getElementById("sun");
var moon = document.getElementById("moon");

var darkmode = document.body.classList.contains("darkmode");

function load() {
    if(darkmode){
        document.getElementById("toggleColorschemeButton").innerText = "Set to darkmode";
    } else {
        document.getElementById("toggleColorschemeButton").innerText = "Set to ligthmode";
    }
}
document.onload = load();

function swithc() {
    darkmode=!darkmode
    if(darkmode){
        csuszka.style.marginLeft = "28px";
        moon.style.display = "block";
        sun.style.display = "none";
    } else {
        csuszka.style.marginLeft = "2px";
        moon.style.display = "none";
        sun.style.display = "block";
    }
    document.body.classList.toggle("darkmode");
}