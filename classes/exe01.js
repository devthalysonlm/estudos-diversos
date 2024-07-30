
//Criando a classe e sua contrução

class Animal {
    constructor(especie, som){
        this.especie = especie
        this.som = som
    }
    //Criando um método que pode ser chamado a qualquer momento com base na classe
    emitirSom(){
        return `${this.especie} emiti ${this.som}`
    }
}

//Crindo um obejto criado com base no planejamento da classe
let animal1 = new Animal('Leao','Rugido')
let animal2 = new Animal('Gato','Miado')
let animal3 = new Animal('Cachorro','Latido')

//Printando na tela o obejto mediante o método pré pronto
//Lembrando que ao printar o o resulto primeiro devemos colocar o objeto depois o método
console.log(animal3.emitirSom())