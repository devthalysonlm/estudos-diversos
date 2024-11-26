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


