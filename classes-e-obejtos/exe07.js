 //exercício-07

//Criação da classe base
 class Produto{
    constructor(nome,preco,quantidade){
        this.nome = nome //Atributo string
        this.preco = preco //Atributo número
        this.quantidade = quantidade //Atributo número
    }

    //Método
    descricao(){
        return `Nome: ${this.nome}\nPreço: ${this.preco}\nQuantidade: ${this.quantidade}`
    }

    atualizarPreco(novoPreco){
        this.preco = novoPreco
    }

}
//Criando o Objeto da classe produto
let maça = new Produto('Maça',1.50,5)
//Chamando o método descrição
console.log(maça.descricao())
//Atualializando o preço do produto
maça.atualizarPreco(`R$${10},00`)
//Chamando a descrição com o preço atualizado.
console.log(maça.descricao())






