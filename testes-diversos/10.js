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

}