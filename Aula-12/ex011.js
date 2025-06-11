var idade = 70
if (idade < 16){
    console.log('não pode votar')
} else if (idade < 18 || idade > 67){
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatorio')
}