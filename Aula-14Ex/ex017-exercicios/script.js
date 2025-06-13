var num = document.getElementById('txtNum')
var tab = document.getElementById('txtTabuada')

function gerar() {
    var n = Number(num.value)
    var c = 1
    var text = ''
    for (c = 1; c <= 10; c++) {
        var auxR = ``
        if (n * c < 10) {
           auxR = `0${n * c} \n`
        }  else {
            auxR =`${n * c} \n`
        }
        if (c < 10){
            text += `${n} x 0${c} = ` + auxR
        }else {
            text += `${n} x ${c} = ` + auxR
        }
    }
    tab.value = text
}