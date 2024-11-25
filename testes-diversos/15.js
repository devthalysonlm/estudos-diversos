//Criando função para procurar Hotel pela categoria
//Criando um array para listar os hoteis procurados
//Percorrer o array de hoteis utilizando for 
//Se a categoria for corresponde a categoria encontrada no indice de hoteis 
//eu vou puxar o nome correspondente ao indice de hoteis para o array de hoteisProcurados
// retornar os hoteis encontrados

function ProcurarHotelPelaCategoria(categoria){
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.length; i++){
        if(categoria == hoteis[i].categotia){
            hoteisProcurados.push(hoteis[i].nome)
        }
    }
     return hoteisProcurados
}