

function ConsultarReservaPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel === reserva.IdHotel){
            let i = idHotel -1
            console.log(`Hotel: ${hoteis[i].Nome}`)
            console.log(`Responsável: ${reserva.Responsavel}`)
            console.log(`Check-in: ${reserva.DiaEnTrada}`)
            console.log(`Check-out: ${diaSaida}`)
        }
    })
}