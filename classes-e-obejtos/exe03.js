//exercício-03


class Banco{
    
    constructor(saldo){
        this.saldo = 0
    }

    depositar(valor){
        if(valor > 0){
            return `Valor depositado R$${this.saldo += valor},00`
        }
       
    }


    sacar(valor){
        if(this.saldo >= valor){
            return `Valor sacado R$${valor - this.saldo  }`
        }
        
    }

    mostrarSaldo(){
        return console.log(`Seu saldo atual é de R$${this.saldo},00`)
    }
    
}


let contaCorrente = new Banco()
console.log(contaCorrente.depositar(150))
console.log(contaCorrente.sacar(50))

//Atualizção de Saldo fixa:
console.log(contaCorrente.mostrarSaldo())
