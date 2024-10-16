


let arrayNumeros = [
    {Numero: 8},
    {Numero: 3},
    {Numero: 11},
    {Numero: 2}
]

function OrdenarPeloMenor(array){
    array.sort((a, b) => a.Numero - b.Numero)
    return array
}

console.log(OrdenarPeloMenor(arrayNumeros))

function OrdenarPeloMaior(array){
    array.sort((a, b) => b.Numero - a.Numero)
    return array
}

console.log(OrdenarPeloMaior(arrayNumeros))