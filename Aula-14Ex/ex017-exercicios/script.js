var num = document.getElementById('txtNum')
var tab = document.getElementById('txtTabuada')

function gerar() {
    var n = Number(num.value)
    var c = 1
    var text = ''
    for (c = 1; c <= 10; c++) {
        text += `${n} x ${c} = ${n * c} \n`
    }
    document.getElementById('txtTabuada').value = text
}