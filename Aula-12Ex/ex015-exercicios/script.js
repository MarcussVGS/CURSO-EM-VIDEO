function carregar(){
    var ano = window.document.getElementById('txtAno')
    var masc = window.document.getElementById('masc')
    var fem = window.document.getElementById('fem')
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('imagem')
    var idade = new Date().getFullYear() - ano.value
    msg.innerHTML = `Sua idade atual é: ${idade}`

    var body =window.document.body
    if (masc == true){
        masc()
    } else if (fem == true){
        fem()
    }
}

function masc(){
        msg.innerHTML = `Sua idade atual é: ${idade}`
    if (idade < 1){
        msg.innerHTML += `<br> Ainda um bebezinho`
        foto.src = 'feto.webp'
        body.style.background = '#3986eb'
    } else if (idade < 20) {
        msg.innerHTML += `<br> Um belo garoto`
        foto.src = 'homemjovem.webp'
        body.style.background = '#2564b6'
    } else if (idade < 50){
        msg.innerHTML += `<br> Um grande homem`
        foto.src = 'homemadulto.webp'
        body.style.background = '#184a8b'
    } else if (idade <= 100){
        msg.innerHTML += `<br> Um belo homem velho`
        foto.src = 'homemidoso.webp'
        body.style.background = '#0c2a52'
    } else  if (idade > 100){
        msg.innerHTML += `<br> Puts, temos uma tartaruga por aqui`
        foto.src = 'rainhaeliz.webp'
        body.style.background = '#0a7a42'
    } else {
        msg.innerHTML += `<br> Voce nao existe`
        foto.src = ''
        body.style.background = '#0c0c0c'
    }
}