function consultarReservaPeloHotel(idHotel){ 
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel -1
            console.log(`Hotel: ${hoteis[i].nome}`)
            console.log(`Responsável: ${reserva.responsavel}`)
            console.log(`Check-in: ${reserva.diaEntrada}`)
            console.log(`Check-out: ${reserva.diaSaida}`)
        }
    })
}
//Criando a função para cosultar hote pela reserva com parâmetro de id da reserva
function ConsultarHotelPelaReserva(idReserva){
    
    let idHotel = reservas[idReserva -  1].idHotel
    //Subtraimos idHotel - 1 para poder colocar o array na posição correta. O nome sgnifica que eu estou acessando a propriedade nome dessa id.
    console.log(`Hotel:${hoteis[idHotel -1].nome}`)
    console.log(`Endereço:${hoteis[idHotel - 1].endereco}`)
    console.log(`Dia de entrada: ${reservas[idReserva - 1].diaEntrada}`)
    console.log(`Dia de saída:${reservas[idReserva - 1].diaSaida}`)
}