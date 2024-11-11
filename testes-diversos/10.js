/*
    Hotel: 
        Id
        Nome
        Categoria
        Endereco
        Telefone
    Reserva:
        Id
        IdHtotel
        Responsavel
        Entrada
        Saida
*/

//CRIANDO CLASSE HOTEL
class Hoteis{
    Id
    Nome
    Categoria
    Endereco
    Telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria 
        this.Endereco = endereco
        this.Telefone = telefone
    }
}

//CRIANDO A CLASSE RESERVA
class Reservas{
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}

//CRIANDO ARRAY
let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//CRIANDO FUNÇÃO DE CADASTRAR HOTEL
function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome do Hotel:')
        if(!nome){
            alert('[ERRO!]O nome do hotel é obrigatório!')
        } 
    } while (!nome);

    let categoria = prompt('Informe a categoria do hotel:')
    let endereco = prompt('Informe o endereço:')
    let telefone = prompt('Informe o telefone:')

    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)

}

//CRIANDO FUNÇÃO DE CADASTRAR RESERVA
function CadastrarReserva(){
    let idHotel;
    let existe = false
    do {
        idHotel = parseInt(prompt('Informe o ID do hotel:'))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel === hoteis[i].Id){
                existe = true
                break;
            } else if(i === hoteis.length -1){
                alert('ID do hotel não cadastrado!')
            }
        }
    } while (!existe);

    let responsavel = prompt('Informe o nome do responsável pela reserva:')
    let diaEntrada = parseInt(prompt('Informe o dia de check-in:'))
    let diaSaida;
    do {
        diaSaida = parseInt(prompt('Informe o dia de check-out:'))
        if(diaSaida < diaEntrada){
            alert('[ERRO!]O check-in deve ser antes do check-out!')
        }
    } while (diaSaida < diaEntrada);

    let reserva = new Reservas(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

function ProcurarReservasPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel - 1
            console.log(`Hotel: ${hoteis[i].Nome}`)
            console.log(`Responsável: ${reserva.Responsavel}`)
            console.log(`Check-in: ${reserva.DiaEntrada}`)
            console.log(`Check-out: ${reserva.DiaSaida}`)
            }
    })
}

let continuar = true

while(continuar){
    let opcao = prompt('Digite 1 para cadastro de hotel\nDigite 2 para cadastro de reserva\nDigite 3 para encerrar o programa')
    switch(opcao){
        case'1':
            CadastrarHotel();
            console.log(hoteis)
            break;
        case'2':
            CadastrarReserva();
            console.log(reservas)
        case'3':
            continuar = false
            alert('Programa encerrado.')
            break
        default:
            alert('[ERRO!]Opção inválida!')
    }
}