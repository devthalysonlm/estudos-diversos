//exercício-02

//Classe base
class Pessoa{
    constructor(nome,idade){
        this.nome = nome //Atributo
        this.idade = idade //Atributo
    }

    //Método
    apresentar(){
        return `Nome: ${this.nome}\nIdade: ${this.idade}`
    }
}

//Classe derivada da classe base
class Funcionario extends Pessoa{ //Usa extends para herdar ca classe Pessoa
    constructor(nome,idade,cargo){
        super(nome,idade) // Define o seu próprio construtor que chama super(nome) para iniciar a parte da classe base
        this.cargo = cargo
    }

    //Método
    informarCargo(){
        return `${this.apresentar()}\nCargo: ${this.cargo}`
    }
}

let funcionario1 = new Funcionario('Thalyson',25,'Programador')

console.log(funcionario1.informarCargo())




