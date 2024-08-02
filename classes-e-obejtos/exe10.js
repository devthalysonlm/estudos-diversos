

class Aluno{
    constructor(nome,){
        this.nome = nome
        this.notas = []
    }   

    adicionarNota(nota){
        return this.notas.push(nota)
    }

    calcularMedia(){
        if(this.notas.length === 0){
            return 0
        }
        let soma = this.notas.reduce((acc, nota) => acc + nota,0);
        return soma / this.notas.length
    }
}

//Cria o obejto
let aluno01 = new Aluno('Thalyson')
//adiciona a nota no aluno
aluno01.adicionarNota(8.5)
aluno01.adicionarNota(7.0)
aluno01.adicionarNota(9.0)
//Mostra a media do aluno
console.log(`A média do aluno ${aluno01.nome} é ${aluno01.calcularMedia().toFixed(2)}`)

