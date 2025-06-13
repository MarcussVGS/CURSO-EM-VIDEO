var inicio = document.getElementById('txtInicio')
var fim = document.getElementById('txtFim')
var passo = document.getElementById('txtPasso')
var res = document.getElementById('res')

function carregar(){
    var i = Number(inicio.value)
    if (i == 0){
        alert('O inicio não pode ser 0')
        return
    }
    var p = Number(passo.value)
    if (p == 0){
        alert('O passo não pode ser 0. Vou considerar passo 1')
        document.getElementById('txtPasso').value = 1
        contarMais()
        return
    }
    contarMais()
}

function contarMais() {
    res.innerHTML = 'Contando: <br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (i < f) {
        for (var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
