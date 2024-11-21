

function ConsultarHotelPelaReserva(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel -1
            console.log(`Nome: ${hoteis[i].nome}`)
            console.log(`Responsavel: ${reserva.responsavel}`)
            console.log(`Dia de entrada: ${reserva.diaEntrada}`)
            console.log(`Dia de saida: ${reserva.diaSaida}`)
        }
    })
}