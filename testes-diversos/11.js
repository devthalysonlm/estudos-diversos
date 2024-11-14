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

//Criando a classe de Hoteis no qual a primeira letra da classe deve ser maiúsculas o restante dos elementos de construção que a compôem podem ser minúsculas.
class Hoteis{
    id
    nome
    categoria
    endereco
    telefone
    constructor(id, nome, categoria, endereco, telefone){
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}
//Criando a classe de Reservas no qual a primeira letra da classe deve ser maiúsculas o restante dos elementos de construção que a compôem podem ser minúsculas.
class Reservas{
    id
    idHotel
    responsavel
    diaEntrada
    diaSaida
    constructor(id, idHotel, responsavel, diaEntrada, diaSaida){
        this.id = id
        this.idHotel = idHotel
        this.responsavel = responsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}


