/////HOTEL DODEV//////////


class Hoteis{
    Nome
    Classe
    Numero
    constructor(nome, classe, numero){
        this.Nome = nome
        this.Classe = classe
        this.Numero = numero
    }
}

let hoteis = []
let idHoteis = 1

function CadastrarHotel(){
    let nome;
    do {
         nome = prompt('Informe o nome do Hotel:')
        if(!nome){
            console.log('O campo nome é obrigatório!')
        } else {
            console.log('Nome cadastrado com sucesso!')
        }
    } while (!nome);

    let classe;
    let escolhaDaClasse = prompt('Informe a categoria do hotel:\n 1 > Econômica\n 2 > Intermediária\n 3 > Luxo')
    switch(escolhaDaClasse){
        case'1':
            classe = 'Econômica'
            console.log(`Classe ${classe} selecionada.`)
            break
        case'2':
            classe = 'Intermediária'
            console.log(`Classe ${classe} selecionada.`)
            break
        case'3':
            classe = 'Luxo'
            console.log(`Classe ${classe} selecionada.`)
            break
        default:
            classe = 'Econômica'
            console.log(`Como nenhuma classe foi selecionada, cadastraremos a classe padrão ${classe}`)
            break
    }

    let numero = prompt('Informe o número de telfone:')

    let hotel = new Hoteis(nome, classe, numero)
    idHoteis++
    hoteis.push(hotel)
}



CadastrarHotel()
console. log(hoteis)