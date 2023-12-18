

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
    var tst = ''

    for(var i in logi){


        if (usuarios == logi[i].login && senha == logi[i].sen){
            logou = true
            break
        }else if(usuarios == 'a' && senha == 'a'){
                tst = 'sim'
            }
        }
    

    


    if(tst == 'sim'){
        location.href = 'teste.html'
        logou = false
    }

    if (logou == true){
        location.href = ('main.html')
    }
    else if(logou == false && tst == ''){
        alert('Usuario ou senha errados.')
    }
}


botao.addEventListener('click', falar)
