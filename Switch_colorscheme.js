var darkmode = false;

function switch_colorscheme(){
    document.body.classList.toggle("darkmode");
    darkmode = !darkmode;
    if (darkmode){
        document.getElementById("toggleColorschemeButton").innerText = "Set to ligthmode";
    } else {
        document.getElementById("toggleColorschemeButton").innerText = "Set to darkmode";
    }
}