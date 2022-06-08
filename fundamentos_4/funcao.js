// função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)//resulta em 5
imprimirSoma(2)//resulta em NaN, b é entendido como undefined
imprimirSoma(2, 3, 4, 5, 6, 7)//resulta em 5, soma os dois primeiros números e ignora o restante
imprimirSoma()//resulta em NaN

//Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))//resulta em 5
console.log(soma(2))//resulta em 3, pois 'b' foi definido como = 1 caso não recebe nenhum valor