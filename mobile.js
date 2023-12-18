var botper = document.getElementById("icoperf")

var normal = document.getElementById("tweetar")

var ladol = false



function abrirop(){
    document.getElementById("lbar").style.display = 'block'
    ladol = true
}

function fecharop(){
    var tlado = document.querySelector("body").offsetWidth
    if(tlado <= 450){
        document.getElementById("lbar").style.display = 'none'
    }
}

botper.addEventListener('click', abrirop)

normal.addEventListener("click", fecharop)