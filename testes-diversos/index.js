

let arrayColaboradores = [
  {Nome:'Abalak chalá', Idade: 44, Nota: 8.9},
  {Nome:'Abur habila', Idade: 41, Nota: 8},
  {Nome:'HalBilau', Idade: 43, Nota: 8.7},
  {Nome:'AmonikRabu', Idade: 42, Nota: 8.2},
  {Nome:'MohamedSala', Idade: 40, Nota: 8.1},
  {Nome:'HashamSalk', Idade: 45, Nota: 8.6}
];


function OrdenarPorNota(array){
  array.sort((a, b) => a.Nota - b.Nota)
  return array
}

function OrdenarPorIdade(array){
  array.sort((a, b) => b.Idade - a.Idade)
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


console.log(OrdenarPorNota(arrayColaboradores))
console.log(OrdenarPorIdade(arrayColaboradores))
console.log(OrdenarPorNome(arrayColaboradores))
