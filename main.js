const classes = {
    "magyar" : 6,
    "matek" : 6,
    "tesi" : 3,
    "informatika" : 5,
    "fizika" : 2,
    "töri" : 2,
    "osztályfőnöki" : 1,
    "angol" : 4
}

var napok = 3;
var hossz = 0;
Object.values(classes).forEach(e=> hossz+=e);
hossz = hossz/Object.values(classes).length;
console.log(hossz);

function generalj() {
    
    kesz = []
    
    function generate_row() {
        orarend = []
        var eselyek = [];
        for (var i in Object.values(classes)) {
            eselyek.push(i/6)
        }
        var positions2 = []
        const classnumbers = Object.values(classes);
        for (var c1=0;c1<classnumbers.length;c1++){
            var positions = [];
            const used = [];
            orarend.forEach(e => used.push(e[0]) );
            //for (var r=0;r<classnumbers[c1];r++){
                var rand = Math.round(Math.random()*hossz);
                
                while ( used.includes(rand) ) {
                    rand = Math.round(Math.random()*hossz);
                }
                positions.push(rand);
            //}
            positions2.push(positions);
            
        }
        for(var pos in positions2){
            orarend.push(Object.keys(classes)[positions2[pos]]);
            //console.log(positions2[pos]);
            
        }
        //console.log(eselyek);
        return orarend;
    }
    
    for (let i=0;i<5;i++){
        kesz.push(generate_row());
    }
    
    console.log(kesz);
    
    
    
    
    let table = document.getElementById("orarend");
    let tableRows = table.children[0].children;
    
    for(let i=1;i<orarend.length;i++){
        if(tableRows[i]){
            let row = tableRows[i].children;
            
            let orak = kesz[i-1];
            for(let j=0;j<orak.length;j++){
                row[j+1].innerText = orak[j];
                row[j+1].classList.add(orak[j]);
            }
        }
    }


}

window.onload = generalj();

var tema = document.getElementById("tema");
tema.addEventListener("change",(e) => {
    console.log(document.getElementById("tema").value);
    
    style = document.getElementById("theme");
    style.href = tema.value + ".css";
    
})