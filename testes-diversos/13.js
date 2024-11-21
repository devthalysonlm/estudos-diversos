function ConsultarHotelPelaReserva(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel - 1
            console.log(`Hotel: ${hoteis[i].nome}`)
            console.log(`Resposavel = ${reserva.responsavel}`)
            console.log(`Dia de entrada: ${reserva.diaEntrada}`)
            console.log(`Dia de saida: ${reserva.diaSaida}`)
        }
    })

}

function ConsultarReservaPeloHotel(idReserva){
    let idHotel = reservas[idReserva - 1].idHotel
    console.log(`Hotel: ${hoteis[idHotel -1].nome}`)
    console.log(`Endereço: ${hoteis[idHotel -1].endereco}`)
    console.log(`Dia de entrada: ${reservas[idReserva -1].diaEntrada}`)
    console.log(`Dia de sair: ${reservas[idReserva -1].diaSaida}`)
}