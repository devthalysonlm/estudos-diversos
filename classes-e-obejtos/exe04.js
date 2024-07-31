//exercício-04


//Criando a classe base
class Pessoa{
    constructor(nome,idade){
        this.nome = nome //Atributo 
        this.idade = idade//Atributo
    }

    //Metodo
    cumprimentar(){
        return `Olá me chamo ${this.nome} e tenho ${this.idade} anos.`
    }

}

//Obejto
let pessoa1 = new Pessoa('Rhonny', 25)
console.log(pessoa1.cumprimentar())

//Alterando atributos 
pessoa1.nome = 'Thalyson'
pessoa1.idade = 30

//chamando o método novamente
console.log(pessoa1.cumprimentar())