

function ConsultarResevaPeloHotel(idHotel){
    if(idHotel == hoteis[i].IdHotel){
        let i = idHotel -1 
        console.log(`Hotel: ${hoteis[i].Nome}`)
        console.log(`Responsavel: ${reserva.Responsavel}`)
        console.log(`Check-in: ${reserva.DiaEntrada}`)
        console.log(`Check-out: ${reserva.DiaSaida}`)

    }
}
