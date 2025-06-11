function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = window.document.getElementById('hora').value
    //hora = 10
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 5 && hora < 12) { // para manha
        msg.innerHTML = `Agora são ${hora} horas da manha`
        msg.innerHTML += `<br> Bom dia`
        img.src = 'manha.webp'
        document.body.style.background = '#d8ac4e'
    } else if (hora >= 12 && hora <= 19) { // para tarde
        msg.innerHTML = `Agora são ${hora} horas da tarde`
        msg.innerHTML += `<br> Boa tarde`
        img.src = 'tarde.webp'
        document.body.style.background = '#b4275d'
    } else { // para noite
        msg.innerHTML = `Agora são ${hora} horas da noite`
        msg.innerHTML += `<br> Boa noite`
        img.src = 'noite.webp'
        document.body.style.background = '#1e2b47'
    }
}