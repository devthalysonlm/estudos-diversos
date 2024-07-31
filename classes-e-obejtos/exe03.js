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
        if(valor > 0 && valor <= this.saldo){
            return `Valor sacado R$${this.saldo -= valor }`
        }
        
    }

    mostrarSaldo(){
        return console.log(`Seu saldo atual é de R$${this.saldo},00`)
    }
    
}


let contaCorrente = new Banco()

contaCorrente.depositar(500)
console.log(contaCorrente.mostrarSaldo())

contaCorrente.sacar(100)

console.log(contaCorrente.mostrarSaldo())
