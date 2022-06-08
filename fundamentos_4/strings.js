const escola = "Cod3r"

console.log(escola.charAt(4))//Pega o indice 4 da string
console.log(escola.charCodeAt(3))//Pega o valor do indice 3 na tabela ASC
console.log(escola.indexOf('3'))//Mostra em qual casa o indice está

console.log(escola.substring(1))//Monstra a partir no indice 1, incluindo o mesmo
console.log(escola.substring(0, 4))//Mostra do indice 0 até o indice 4, sem incluir o indice final

console.log('Escola '.concat(escola).concat("!"))//concatena as strings
console.log(escola.replace(3, 'e'))//Substitui o 3 indice pela letra e
console.log(escola.replace(/\w/g, 'e'))//Substitui todos os indices pela letra e
console.log(escola.replace(/\d/g, 'e'))//Substitui todos os indices que não são letras pela letra e

console.log('Ana, Maria, Pedro'.split(','))//Transforma em array dividido pelo que vc escolher (',')
