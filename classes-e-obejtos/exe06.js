//exercicio-06


class Calculadora{
    
    

    somar(n1=0,n2=0){
        return n1 + n2
    }

    multiplicar(n1=0,n2=0){
        return n1 * n2
    }
}

let minhaCalculadora = new Calculadora();

console.log(`Somando: ${minhaCalculadora.somar(5,2)}\nMultiplicando: ${minhaCalculadora.multiplicar(2,5)}`)