
/*
function parImpar(n1 = 0){
    if(n1 % 2 == 0){
        return`Número Par`
    } else {
        return `Número Impar`
    }
}

console.log(parImpar(2))
*/

function parImpar(n1 = 0){
   let resultado = (n1 % 2 === 0)? 'Número Par' : 'Número Impar'
   return resultado
}

console.log(parImpar(2))