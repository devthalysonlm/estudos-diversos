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

//Criando a classe de Hoteis
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

//Criando a classe de reservas
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

//Criando o arrays para contagem e armazenamento

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva  = 1


//Criando função para cadastrar hotel

function CadastrarHotel(){
    //O nome do hotel não pode ser vazio então colococamos o mesmo em uma condição em que o usuário é obrigado a inserir um caracter!
    let nome;
    do {
        nome = prompt('Informe o nome do Hotel:')
        if(!nome){
            alert('O campo nome é obrigatório!')
        } else {
            alert('Nome inserido com sucesso!')
        }
    } while (!nome);

    //Solicitando as outras informações normalmente!
    let categoria = prompt('Informe a categoria do Hotel:')
    let endereco = prompt('Informe o endereço:')
    let telefone = prompt('Informe o telefone:')

    //Criando obejto do hotel a ser cadastrado!
    let hotel = new Hoteis(idHotel, nome, categoria, endereco, telefone)
    //Inserindo o id no hotel
    idHotel++
    //Puxando o hotel cadastrado para a minha lista de hoteis
    hoteis.push(hotel)
 
}

function CadastrarReserva(){
    //Primeira parte da função de cadastrar reserva
    //Deixamos a variaval idHotel em standBy para ser usada posteriormente.
    let idHotel;
    let existe = false
    do {
        //Solicitando o id do Hotel
        idHotel = prompt('Informe o ID do Hotel:')
        //contagem que vai fazer uma interação com cada elemente do array de hoteis
        for(let i = 0; i < hoteis.length; i++){
            //Se por acado a contagem for igual a algum elemeente de ID do array hoteis o hotel existe
            if(parseInt(idHotel) === hoteis[i].id){
                existe = true
                //Se o Hotel existe a minha contagem para com o break;
                break;
                //Se por acaso a contagem passar a ponto de resultar e um id inexistente como -1 o ID não foi cadastrado
            } else if(i === hoteis.length -1){
                alert('ID de Hotel não cadastrado')
            }
        }

    } while (!existe);

    //Segunda parte da função CadastrarReserva
    //Solcita as informações necessário como responsável pela reserva e dia de entrada e deixa o dia de saida como standBy
    let responsavel = prompt('Informe o nome do responável pela reserva:')
    let diaEntrada = parseInt(prompt('Informe o dia de Check-in'))
    let diaSaida;
    //Cria um dowhile em que a condição para sair desse loop é que o dia de entrada não deve ser maior que o dia de saida. 
    do {
        diaSaida = parseInt(prompt('informe o dia de Check-out:'))
        if(diaSaida < diaEntrada){
            alert('O dia de Check-in não pode ser maior do que o Check-out!')
        }
    } while (diaSaida < diaEntrada);
    //Cria o objeto da novareserva
    let reserva = new Reservas(idReserva, idHotel, responsavel, diaEntrada, diaSaida)
    //Atribui o id da reserva
    idReserva++
    //Puxa a nova reserva para o array de reservas
    reservas.push(reserva)
}

function ProcurarReservaPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel -1
            console.log(`Hotel: ${hoteis[i].nome}`)
            console.log(`Responsável: ${reserva.responsavel}`)
            console.log(`Dia de Check-in: ${reserva.diaEntrada}`)
            console.log(`Dia de Check-out: ${reserva.diaSaida}`)
        }
    })
}

function ProcurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva -1].idHotel;
    console.log(`Hotel: ${hoteis[idHotel - 1].nome}`)
    console.log(`Endereço: ${hoteis[idHotel - 1].endereco}`)
    console.log(`Check-in: ${reservas[idReserva - 1].diaEntrada}`)
    console.log(`Check-out: ${reservas[idReserva - 1].diaSaida}`)

}
//Criando a função para procurar reservas pelo nome
function ProcurarReservasPeloNome(nome){
    //Percorrendo cada elemento do array de reservas utilizando o for
    for(let i = 0; i < reservas.length; i++){
        //Se o meu nome for igual ao meus indice encontrado dentro de alguma reserva eu trago o elemento responsável que é o nome do responsável pela reserva.
        if(nome == reservas[i].responsavel){
            //trazendo a informação de id de reserva com base no indice correspondente
            console.log(`ID da reserva: ${reservas[i].id}`)
            console.log(`Hotel: ${hoteis[(reservas[i].idHotel) - 1].nome}`)
        }
    }
}


let continuar = true
while(continuar){
    let opçoes = parseInt(prompt('Bem vindo ao Hotel DoDev\nEscolha uma das opções abaixo!!\n 1 - Cadastro de Hotel\n 2 - Cadastro de Reserva\n 3 - Consultar reserva por hotel\n 4 - Consultar hotel por reserva\n 5 - Sair'))
    switch (opçoes) {
        case 1:
            CadastrarHotel();
            console.log(hoteis)
            break;
        case 2:
            CadastrarReserva();
            console.log(reservas)
            break;
        case 3:
            ProcurarReservaPeloHotel(parseInt(prompt('Informe o ID do hotel:')))
            break;
        case 4:
            ProcurarHotelPelaReserva(parseInt(prompt('Informe o ID da reserva: ')))
        case 5:
            continuar = false
            break;
        default:
            console.log('ERRO!')
            break;
    }

}








//CadastrarHotel();

//console.log(hoteis)