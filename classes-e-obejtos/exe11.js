

class Matematica{
    
    somar(n1, n2){
        return n1 + n2
    }

    multiplicar(n1,n2){
        return n1 * n2
    }

    factorialize(n1){
        if (n1 < 0){
            return -1
        } else if(n1 == 0){
            return 1
        } else {
            return (n1 * this.factorialize(n1 - 1))
        }
    }
}

let calculo1 = new Matematica()


console.log(calculo1.somar(5,5))
console.log(calculo1.multiplicar(2,3))
console.log(calculo1.factorialize(5))