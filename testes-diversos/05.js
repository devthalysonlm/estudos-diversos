


console.log('BEM VINDOS AO HOTEL DODEV')

class Hoteis{
    Nome
    Categoria
    Telefone
    constructor(nome, categoria, telefone){
        this.Nome = nome
        this.Categoria = categoria
        this.Telefone = telefone
    }
}

let hoteis = []
let idHotel = 1

function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome do Hotel:')
        if(!nome){
            console.log('O nome não pode estar vazio.')
        }
    } while (!nome);

    let categoria;
    let categoriaOpcao = prompt('Temos 3 tipos de categorias disponíveis:\n 1 > Econômico\n 2 > Luxo\n 3 > Intermediário ')
    switch(categoriaOpcao){
        case'1':
        categoria = 'Econômico'
        break;
        case'2':
        categoria = 'Luxo'
        break;
        case'3':
        categoria = 'Intermediário'
        break;
        default:
            console.log('Opção inválida! Estamos atribuindo a cetegoria padrão econômico.')
        break;
    }

    let telefone = prompt('Informe um número de telefone:')

    let hotel = new Hoteis(nome, categoria, telefone)
    idHotel++
    hoteis.push(hotel)

    let continuar;
    do {
        let continuar = prompt('Digite 1 para continuar ou 2 para encerrar.')
        if(continuar == '1'){
            CadastrarHotel()
        } else if(continuar == 2){
            console.log('Cadastro finalizado com sucesso!')
        } else {
            console.log('Opção invãlida. Tente novamente!')
        }
        
    } while (continuar !== '1' && continuar !== '2');

}

CadastrarHotel()
console.log(hoteis)