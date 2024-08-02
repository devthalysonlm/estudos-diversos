//exercicio-02

function dividir(a=0,b=0){
    let resultado;
    if(b === 0){
        return `Não é possível divir por 0`
    } else {
        resultado = a / b
    }
    
    return resultado
}

console.log(dividir(10,2))
console.log(dividir(10))