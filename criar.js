var botao = document.getElementById("botao")

function criar(){


    var texto = document.getElementById("texto").value
    var criardiv = document.createElement('div')
    criardiv.classList.add("divtt")
    var conteudo = document.createTextNode(`${texto}`)
    criardiv.appendChild(conteudo)
    var div1 = document.getElementById('vai')
    document.body.insertBefore(criardiv,div1)
}

botao.addEventListener('click', criar)