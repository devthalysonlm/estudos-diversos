/*
    Hotel: 
        Id
        Nome
        Categoria
        Endereco
        Tefefone
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
    Entrada
    Saida
    constructor(id, idHotel, responsavel, entrada, saida){
        this.Id = id
        this.IdHotel = idHotel
        this.Responsavel = responsavel
        this.Entrada = entrada
        this.Saida = saida
    }
}

let hoteis = []
let idHotel = 1
let reservas = []
let idReserva = 1


function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome:')
        if(!nome){
            console.log('O campo nome é obrigatório!')
        }
    } while (!nome);
    
    let categoria = prompt('Informe a categoria:')
    let endereco = prompt('Informe o endereco:')
    let telefone = prompt('Informe o telefone:')
    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

function CadastrarReserva(){
    let idHotel;
    let existe = false;

    do {
        idHotel = parseInt(prompt('Informe o ID do Hotel:'))
        for(i = 0; i < hoteis.length; i++){
            if(idHotel === hoteis[i].Id){
                existe = true;
                break;
            } else if(i === hoteis.length -1){
                console.log('ID  do Hotel não cadastrado!')
            }
        }
    } while (!existe);

    let responsavel = prompt('informe o nome do responsável:')
    let entrada = parseInt(prompt('Informe o dia de entrada:'))
    let saida;
    do {
        saida = parseInt(prompt('Informe o dia de saída:'))
        if(saida < entrada){
            console.log('A saída não pode ser antes da entrada!')
        }
    } while (saida < entrada);

    let reserva = new Reservas(idReserva, idHotel, responsavel, entrada, saida)
    idReserva++
    reservas.push(reserva)
}


