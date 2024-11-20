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
    let idHotel;
    let existe = false
    do {
        //Solicitando o id do Hotel
        idHotel = prompt('Informe o ID do Hotel:')
        //contagem que vai fazer uma interação com cada elemente do array de hoteis
        for(let i = 0; i < hoteis.length; i++){
            //Se por acado a contagem for igual a algum elemeente de ID do array hoteis o hotel existe
            if(idHotel === hoteis[i].id){
                existe = true
                //Se o Hotel existe a minha contagem para com o break;
                break;
                //Se por acaso a contagem passar a ponto de resultar e um id inexistente como -1 o ID não foi cadastrado
            } else if(i === hoteis.length -1){
                alert('ID de Hotel não cadastrado')
            }
        }

    } while (!existe);
}



//CadastrarHotel();
//console.log(hoteis)