const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[3])

valores [3] = 10;
console.log(valores[3])

// imprime o tamanho do vetor
console.log(valores.length)

// adiciona um dado no último elemento do vetor
valores.push({id: 3})
console.log(valores)

// remove o ultimo elemento
console.log(valores.pop())
console.log(valores)

// elimina um dado num elemento especifico do vetor
delete valores[0]
console.log(valores)

console.log(typeof valores)