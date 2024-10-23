let alunos = [
    {Nome:'Nina', Idade: 4, Nota: 8.5},
    {Nome:'Safira', Idade: 3, Nota: 8.4},
    {Nome:'Peidinho', Idade: 2, Nota: 8.6},
    {Nome:'Hael Preto', Idade: 1, Nota: 8.7}
]

function OrdenarPorNota(array){
    array.sort((a, b) => a.Nota - b.Nota)
    return array
}

function OrdenarPorIdade(array){
    array.sort((a, b) => a.Idade - b.Idade)
    return array
}

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

function CalcularMedia(array){
    if(array.length === 0){
        return 0
    }

    let somaNotas = 0

    array.forEach((x) => {
        somaNotas += (x.Nota)
    })

    const media = somaNotas / array.length
    return media
}


console.log(CalcularMedia(alunos))