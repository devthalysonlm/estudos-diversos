/*
    Descrevendo o exercício 17 da Dodev por partes:
    1 - Criando a classe de Hoteis
    2 - Criando a classe de reservas
        /*
    Hotel: 
        Id
        Nome
        Categoria
        Endereco
        Telefone
    Reserva:
        Id
        IdHtotel
        Responsavel
        Entrada
        Saida

    3 - Criando o arrays para contagem e armazenamento
    4 - Criando função para cadastrar hotel
    5 - O nome do hotel não pode ser vazio então colococamos o mesmo em uma condição em que o usuário é obrigado a inserir um caracter!
    6 - Solicitando as outras informações normalmente!
    7 - Criando obejto do hotel a ser cadastrado!
    8 - Inserindo o id no hotel
    9 - Puxando o hotel cadastrado para a minha lista de hoteis
    10 - Primeira parte da função de cadastrar reserva
    11 - Deixamos a variaval idHotel em standBy para ser usada posteriormente.
    12 - Solicitando o id do Hotel
    13 - contagem que vai fazer uma interação com cada elemente do array de hoteis
    14 - Se por acaso a contagem for igual a algum elemeente de ID do array hoteis o hotel existe
    15 - Se o Hotel existe a minha contagem para com o break
    16 - Se por acaso a contagem passar a ponto de resultar e um id inexistente como -1 o ID não foi cadastrado
    17 - Segunda parte da função CadastrarReserva
    18 - Solicita as informações necessário como responsável pela reserva e dia de entrada e deixa o dia de saida como standBy
    19 - Cria um dowhile em que a condição para sair desse loop é que o dia de entrada não deve ser maior que o dia de saida.
    20 - Cria o objeto da novareserva
    21 - Atribui o id da reserva
    22 - Puxa a nova reserva para o array de reservas
    23 - Criando função consultar reserva pelo hotel
    24 - Percorremos todo o array de reservas utilizando o forEach que percorre elemento por elemento do array e retorna uma função de callBack
    25 - Se o id do meu Hotel bater com o id relacionado ao id encontrado na reserva (função de callBack)
    26 - Eu subtraio 1 do idHotel pois o array de reservas começa em 0 e o idHotel em 1,subtraindo 1 os dois ficam na mesma sintonia
    27 - Eu acesso o array de hoteis e puxo o nome do  mesmo em relação ao indice correspondente a reserva.
    28 - Acesso o elemento encontrado na minha função de callback que vasculha o array de reservas e puxo o nome do responsável correspondente a essa reserva
    29 - Acesso o elemento encontado na função de callBack que vasculha o array de reservas e puxo o dia de Check-in correspondente a essa reserva
    30 - Acesso o elemento encontrado  na função de callBack que vasculha o array de reservas e puxo o dia de check-out correspondente a essa reserva
    31 - Criando a função consultar hotel pela reserva
    32 - Atribuindo a variável idHotel o valor da propriedade idHotel do objeto de uma reserva específica  acessado pelo ídeice idReserva -1 no array reservas. 
    33 - Acessando um elemento específico (nome) do array de hotel. O indice do array começa em 0 e o idHotel em 1 por isso devemos subtrair 1 do id
    34 - Acessando um elemento específico (endereco) do array de hotel. O indice de array começa em 0 e o idHotel em 1 por isso devemos subtrair 1 do id
    35 - Criando a função para procurar o hotel pela reserva
    36 - criando a variável idHotel no qual nos acessamos as reservas e fazemos com que o idReserva seja -1 para poder acompanhar o array e começar em o e ficar igual a idHotel
    37 - Acessamos o idHotel -1 nos hoteis e acessamos a informção nome
    38 - Acessamos o idHotel -1 nos hoteis e acessamos a informção endereco
    39 - Acessamos o idReserva -1 em reservas e acessamos o dia de entrada e o mesmo com o dia de saida
    40 - Criando a função para procurar reservas pelo nome
    41 - Percorrendo cada elemento do array de reservas utilizando o for
    42 - Se por acaso o nome que eu solicitar existir dentro do indicede reservas e for igual ao elemento do propriedade responsável
    43 - Eu acesso o id da indice de reservas procurado
    44 - Próxima linha da uma verificada na resolução
    45 - Criando uma função para procurar o hotel pela categoria
    46 - Criando um array que vai guardar o nome dos hoteis procurados
    47 - Percorrendo cada elemento do array de hoteis com for
    48 - Se a categoria for correspondente ao indice procurador no array de hoteis
    49 - Eu puxo o nome do hotel acessando o indice do array de hoteis
    50 - Retorno o array de hoteis procurados atualizado.
    51 - Criando a função de atualizar o telefone do hotel com parâmetros de idHotel e telefone
    52 - Acessar a propriedade telefone dentro do array de hoteis já subtraindo 1 do idHotel fazendo com oque o mesmo seja igual a telefone que será o novo telefone
    53 - Colcoar uma mensagem na tela dizendo que o telefone foi atualizado.
    54 - 
    55 - 
    56 - 
    57 - 
    58 - 
    59 - 
    60 - 




*/