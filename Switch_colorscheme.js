function load() {
    if(document.body.classList.contains("darkmode")){
        document.getElementById("toggleColorschemeButton").innerText = "Világos módra állítás";
    } else {
        document.getElementById("toggleColorschemeButton").innerText = "Sötét módra állítás";
    }
}
document.onload = load();

var darkmode = document.body.classList.contains("darkmode");

function switch_colorscheme(){
    document.body.classList.toggle("darkmode");
    darkmode = !darkmode;
    if (darkmode){
        document.getElementById("toggleColorschemeButton").innerText = "Világos módra állítás";
    } else {
        document.getElementById("toggleColorschemeButton").innerText = "Sötét módra állítás";
    }
}