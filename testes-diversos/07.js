/* 
    1 - Criar uma classe Hotel 
    2 - Criar array
    3 - Criar Funcão de cadastrar hotel
    4 - Verificar se o nome está vazio
    5 - Oferecer 3 categorias 
    6 - Pedir o numero e colocar o hotel nos seus respectivos array
*/

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
        this.Saida = Saida
    }
}

let hoteis = []
let idhotel = []   

function CadastrarHotel(){
    let nome;
    do {
        nome = prompt('Informe o nome da unidade:')
        if(!nome){
            console.log('O campo nome não pode estar vazio!')
        }
    } while (!nome);

    let classe;
    let escolhaDaClasse = prompt('Escolha a classe desejada:\n 1 - Econômica\n 2 - Intermedária\n 3 - Luxo')
    switch(escolhaDaClasse){
        case'1':
            classe = 'Econômica'
            console.log(`Você escolheu a classe ${classe}`)
            break;
        case'2':
            classe = 'Intermediária'
            console.log(`Você escolheu a classe ${classe}`)
            break;
        case'3':
            classe = 'Luxo'
            console.log(`Você escolheu a classe ${classe}`)
            break;
        default:
            classe = 'Econômica'
            console.log('Classe Inválida! A classe padrão Econômica foi selecionada automáticamente!')
            break;
    }

    let telefone  = prompt('Informe o número de telefone da unidade:')

    let continuar;
    do {
        continuar = prompt('Informe 1 caso deseja cadastrar mais unidades ou 2 para encerrar o cadastro:')
        if(continuar == '1'){
            CadastrarHotel()
        } if(continuar == '2'){
            console.log('Cadastro Finalizado com sucesso!')
        } else {
            console.log('Opção inválida, tente novamente!')
        }
    } while (continuar !== '1' && continuar !== '2');


    let hotel = new Hoteis(nome, classe, telefone)
    idhotel++
    hoteis.push(hotel)
}


function CadastrarReserva(){
    let idHotel;
    let existe = false;

    do {
        idHotel = paseInt(prompt('Informe o ID do hotel:'))

        for(let i = 0; i < hoteis.length; i++){
            if(idHotel === hoteis[i].Id){
                existe = true;
                break;
            } else if (i === hoteis.length -1){
                console.log('ID do Hotel não cadastrado!')
            }
        }
    } while (!existe);
}

