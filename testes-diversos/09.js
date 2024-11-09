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

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

function CadastrarHotel(){
    let nome;
    do {
       nome = prompt('Informe o nome:')
       if(!nome){
        alert('[ERRO]! O campo nome é obrigatório!')
       } 
    } while (!nome);

    let categoria = prompt('Informe a categoria:')
    let endereco = prompt('Informe o endereço:')
    let telefone = parseInt(prompt('Informe o telefone:'))

    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
    
}


function CadastrarReserva(){
    let idHotel;
    let existe = false

    do {
        idHotel = parseInt(prompt('Informe o ID do hotel:'))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel === hoteis[i].Id){
                existe = true;
                break
            } else if(i === hoteis.length -1){
                alert('ID do Hotel não cadastrado!')
            }
        }
    } while (!existe);

    let responsavel = prompt('Informe o nome do responsável pela reserva:')
    let diaEntrada = parseInt(prompt('Informe o dia de entrada:'))
    let diaSaida;

    do {
         diaSaida = parseInt(prompt('informe o dia de saída:'))
         if(diaSaida < diaEntrada){
            alert('O dia de saída não pode ser menor que o dia de entrada!')
         } 
    } while (diaSaida < diaEntrada);

    let reserva = new Reservas(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)

}






