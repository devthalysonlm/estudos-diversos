//exercício-08

class ContaBancaria{
    constructor(titular,saldo=0){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(valor){
        if(valor){
            this.saldo += valor
        }
        
        
    }

    sacar(valor){
        if(valor <= this.saldo ){
           this.saldo -= valor 
        } else {
            console.log('Saldo insuficinte!')
        }
    }

    saldoAtual(){
        return `Saldo atual: R$${this.saldo},00`
    }
}

let minhaConta = new ContaBancaria('Thalyson')


minhaConta.depositar(500)
minhaConta.sacar(100)
minhaConta.depositar(1000)
minhaConta.sacar(2000)
console.log(minhaConta.saldoAtual())
