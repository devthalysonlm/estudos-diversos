/*
     Função: Trecho de código que só é executado quando é chamado/invocado

        Função Void (Vazia)
        Função com parâmetros (s)
        Função  return
        Função Arrow / Arrow Function

*/

//Função com Parâmetros. A função no geral é um treço de código que pode ser reutilizado várias vezes


/*function mostraNome(nome){
    console.log(nome)
}

mostraNome("Thalyson")
mostraNome(`Chamando a função pela segunda vez.`)
*/

function soma(numero1=0,numero2=0){  //O =0 quer dizer que se por acaso não for informado nenhum valor nesse parâmetro automaticamente ele é igual a 0 (=0)
    console.log(numero1 + numero2)
}


soma(2)