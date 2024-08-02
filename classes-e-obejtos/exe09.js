

class Veiculo{
    constructor(marca,modelo,ano=0){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    informacoes(){
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`
    }
}

class Carro extends Veiculo{
    constructor(marca,modelo,ano,portas=0){
        super(marca,modelo,ano)
        this.portas = portas
        
    }
    infoAtualizadas(){
        return `${this.informacoes()}\nPortas: ${this.portas}`
    }
}


let carro1 = new Carro('Porsche','911 Carrera GTS', 2023, 2)

console.log(carro1.infoAtualizadas())