let num = document.getElementById('txtNumber')
let lista = document.getElementById('txtNumbers')
let res = document.getElementById('res')
let numbers = []


function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, numbers)){
        numbers.push(Number(num.value))
        lista.value += `${num.value}`
        lista.value += `. Quantidade: ${numbers.length}\n`
    } else {
        window.alert(`O valor ${num.value} já existe na lista ou esta fora do limite.`)
    }
}
    function isNumber(num) {
        if (Number(num) >= 1 && Number(num) <= 100) {
            return true
        } else {
            return false
        }
    }
    function inLista(num, lista) {
        if (lista.indexOf(Number(num)) >= 0) {
            return true
        } else {
            return false
        }
    }

function analisar(){
    res.innerHTML = ''
    if (numbers.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML += contar(numbers) + '<br>'
        res.innerHTML += maior(numbers)  + '<br>'
        res.innerHTML += menor(numbers)  + '<br>'
        res.innerHTML += soma(numbers)   + '<br>'
        res.innerHTML += media(numbers)  + '<br>'
    }

}
    function contar(lista){
        return `Ao todo tivemos ${lista.length} numeros cadastrados.`
    }
    function maior(lista){
        return `O maior valor informado foi ${Math.max(...lista)}`
    }
    function menor(lista){
        return `O menor valor informado foi ${Math.min(...lista)}`
    }
    function soma(lista){
        return `A soma dos valores informados foi ${lista.reduce((a, b) => a + b)}`
    }
    function media(lista){
        return `A media dos valores informados foi ${lista.reduce((a, b) => a + b) / lista.length}`
    }   

