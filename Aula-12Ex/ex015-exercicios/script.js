var ano = window.document.getElementById('txtAno')
var masc = window.document.getElementById('masc')
var fem = window.document.getElementById('fem')
var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var idade
var bodyColor = document.body.style.background
bodyColor = '#520c29'

function iniciar(){
    msg.innerHTML = `Informe o Ano de Nascimento`
    msg.innerHTML += `<br> e selecione o sexo`
    foto.src = 'rainhaeliz.webp'
    document.body.style.background = '#520c29'
}
function carregar(){
    idade = new Date().getFullYear() - ano.value
    if (masc.checked == "m"){
        masculino()
    } else if (fem.value == "f"){
        feminino()
    } 
    if (idade < 0){
        msg.innerHTML = `informe o Ano de Nascimento <strong> invalido </strong>`
        foto.src = ''
        document.body.style.background = '#0c0c0c'
    }
}
function masculino(){
        msg.innerHTML = `Sua idade atual é: ${idade}`
    if (idade < 1){
        msg.innerHTML += `<br> Ainda um bebezinho`
        foto.src = 'feto.webp'
        document.body.style.background = '#3986eb'
    } else if (idade >= 1 && idade < 20 ) {
        msg.innerHTML += `<br> Um belo garoto`
        foto.src = 'homemjovem.webp'
        document.body.style.background = '#2564b6'
    } else if (idade >= 20 && idade < 50){
        msg.innerHTML += `<br> Um grande homem`
        foto.src = 'homemadulto.webp'
        document.body.style.background = '#184a8b'
    } else if (idade >= 50 && idade <= 100){
        msg.innerHTML += `<br> Um belo homem velho`
        foto.src = 'homemidoso.webp'
        document.body.style.background = '#0c2a52'
    } else  if (idade > 100){
        msg.innerHTML += `<br> Puts, temos uma tartaruga por aqui`
        foto.src = 'rainhaeliz.webp'
        document.body.style.background = '#0a7a42'
    } else {
        msg.innerHTML += `<br> Voce nao existe`
        foto.src = ''
        document.body.style.background = '#0c0c0c'
    }
}
function feminino(){
        msg.innerHTML = `Sua idade atual é: ${idade}`
    if (idade < 1){
        msg.innerHTML += `<br> Ainda um bebezinho`
        foto.src = 'feto.webp'
        bodyColor = '#f04d91'
    } else if (idade >= 1 && idade < 20 ) {
        msg.innerHTML += `<br> Um bela garota`
        foto.src = 'mulherjovem.webp'
        bodyColor = '#b6255d'
    } else if (idade >= 20 && idade < 50){
        msg.innerHTML += `<br> Uma grande mulher`
        foto.src = 'mulheradulta.webp'
        bodyColor = '#8b1848'
    } else if (idade >= 50 && idade <= 100){
        msg.innerHTML += `<br> Uma bela mulher velha`
        foto.src = 'mulheridosa.webp'
        bodyColor = '#0c2a52'
    } else  if (idade > 100){
        msg.innerHTML += `<br> Puts, temos uma tartaruga por aqui`
        foto.src = 'rainhaeliz.webp'
        bodyColor = '#520c29'
    } else {
        msg.innerHTML += `<br> Voce não existe`
        foto.src = ''
        bodyColor = '#0c0c0c'
    }
}