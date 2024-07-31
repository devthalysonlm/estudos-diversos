 //exercício-07

//Criação da classe base
 class Produto{
    constructor(nome,preco,quantidae){
        this.nome = nome //Atributo string
        this.preco = 0 //Atributo número
        this.quantidade = 0 //Atributo número
    }

    //Método
    descricao(){
        return `Nome: ${this.nome}\nPreço: ${this.preco}\nQuantidade: ${this.quantidade}`
    }

    atualizarPreco(novoPreco){
        this.preco = novoPreco
    }

}

let maça = new Produto('Maça',1,5)
maça.atualizarPreco(`R$${1},00`)


console.log(maça.descricao())






