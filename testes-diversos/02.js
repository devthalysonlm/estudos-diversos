
//Criando um array de objetos
let nomes = [
    {Nome:'Nina', Idade: 4, Nota: 10},
    {Nome:'Safyra', Idade: 3, Nota: 9},
    {Nome:'Peidinho', Idade: 2, Nota: 8},
    {Nome:'Hael Preto', Idade: 1, Nota: 7}
]

//Ordenando por nome

function OrdenarPorNome(array){
    array.sort((a, b) => {
        const nomeA = a.Nome.toUpperCase()
        const nomeB = b.Nome.toUpperCase()

        if(nomeA < nomeB){
            return -1
        }
        if(nomeA > nomeB){
            return 1
        }
        return 0
    })
    return array
}



function OrdenarPorIdade(array){
    array.sort((a, b) => a.Idade - b.Idade)
    return array
}





console.log(OrdenarPorNome(nomes))
console.log(OrdenarPorIdade(nomes))