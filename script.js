

var logi = [
    {
        login: 'kallew',
        sen: 'kallew08'
    },
    {
        login: 'a',
        sen: 'a'
    },
    {
        login: 'mriarta',
        sen: '200404'
    }
]


var botao = document.getElementById('botao')



function falar() {
    var usuarios = document.getElementById('usuario').value
    var senha = document.getElementById('senha').value
    var logou = false

    for(var i in logi){
        if (usuarios == logi[i].login && senha == logi[i].sen){
            logou = true
            break
        }
    }

    if (logou == true){
        location.href = ('main.html')
    }
    else{
        alert('erro')
    }
    

}


botao.addEventListener('click', falar)
