var botao = document.getElementById("botao")

function criar(){
    
    // criando uma variavel para a div pai
    var pai = document.getElementById("tweetar")

    //criando a area para os tweets
    var tweets = document.getElementById('tweets')


    //criando uma variavel para o input do texto
    var texto = document.getElementById("texto").value

    //criando variavel para a div
    var criardiv = document.createElement('div')

    //dando uma class para a div
    criardiv.classList.add("divtt")

    //criando uma variavel com co conteudo do input
    var conteudo = document.createTextNode(`${texto}`)

    //inserindo o conteudo na div
    criardiv.appendChild(conteudo)

    //criando a div com conteudo dentro da div pai
    tweets.appendChild(criardiv)

    
}

botao.addEventListener('click', criar)

var perfil = document.getElementById("perfil")

function perfilir(){
    
    location.href =`perfil.html`
}
perfil.addEventListener('click', perfilir)