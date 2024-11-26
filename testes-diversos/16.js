//Criando função consultar reserva pelo hotel
function ConsultarReservaPeloHotel(IdHotel){
    //Percorremos todo o array de reservas utilizando o forEach que percorre elemento por elemento do array e retorna uma função de callBack
    reservas.forEach(reserva => {
        //Se o id do meu Hotel bater com o id relacionado ao id encontrado na reserva (função de callBack)
        if(idHotel == reserva.idHotel){
            //Eu subtraio 1 do idHotel pois o array de reservas começa em 0 e o idHotel em 1,subtraindo 1 os dois ficam na mesma sintonia
            let i = idHotel - 1
            //Eu acesso o array de hoteis e puxo o nome do  mesmo em relação ao indice correspondente a reserva.
            console.log(`Hotel: ${hoteis[i].nome}`)
            //Acesso o elemento encontrado na minha função de callback que vasculha o array de reservas e puxo o nome do responsável correspondente a essa reserva
            console.logh(`Nome: ${reserva.responsavel}`)
            //Acesso o elemento encontado na função de callBack que vasculha o array de reservas e puxo o dia de Check-in correspondente a essa reserva
            console.log(`Check-in: ${reserva.diaEntrada}`)
            //Acesso o elemento encontrado  na função de callBack que vasculha o array de reservas e puxo o dia de check-out correspondente a essa reserva
            console.log(`Check-out: ${reserva.diaSaida}`)
        }
    })

}


//Criando a função consultar hotel pela reserva
function ConsultarHotelPelaReserva(idReserva){
 //Atribuindo a variável idHotel o valor da propriedade idHotel do objeto de uma reserva específica  acessado pelo ídeice idReserva -1 no array reservas.   
 let idHotel = reservas[idReserva - 1].idHotel
 //Acessando um elemento específico (nome) do array de hotel. O indice do array começa em 0 e o idHotel em 1 por isso devemos subtrair 1 do id
 console.log(`Hotel:${hoteis[idHotel - 1].nome}`)
 //Acessando um elemento específico (endereco) do array de hotel. O indice de array começa em 0 e o idHotel em 1 por isso devemos subtrair 1 do id
 console.log(`Endereço:${hoteis[idHotel - 1].endereco}`)
 //Nesses dois elementos estamos acessando um elemento específica do array de reservas (diaEntrada, diaSaida) onde devemos igualar o índice onde no array começa em 0 
 // e no idRserva começa em 1, logo subtraímos 1 do IdReserva.
 console.log(`Check-in: ${reservas[idReserva - 1].diaEntrada}`)
 console.log(`Check-out: ${reservas[idReserva -1].diaSaida}`)

}

//Criando a função para procurar a reserva pelo nome
function ProcurarReservaPeloNome(nome){
    //Percorrendo cada elemento do array de reservas utilizando a contagem for
    for(let i = 0; i < reservas.length; i++){
        //Se por acaso o nome que eu solicitar existir dentro do indicede reservas e for igual ao elemento do propriedade responsável
        if(nome == reserva[i].responsavel)
            //Eu acesso o id da indice de reservas procurado
            console.log(`ID da reserva: ${reservas[i].id}`)
            console.log(`Hotel: ${hoteis[reservas[i].idHotel-1].nome}`)

    }
}