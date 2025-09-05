let osztályok = {
    "9":["angol;3","matek;4","tesi;2"],
    "10":["matek3","angol2","magyar4"]
}

let órarend9 = []
let órarend10 = []

let óraszám9 = 0
for(var i in osztályok[9]){
    console.log(parseInt(osztályok[9][i]))
}

let árlagóra = 0