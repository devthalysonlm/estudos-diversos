//exercício-05

//Criando a classe base
class Livro{
    constructor(titulo,autor,anoDePublicacao){
        this.titulo = titulo//Atributo
        this.autor = autor//Atributo
        this.anoDePublicacao = anoDePublicacao//Atributo
    }
    
    //Metodo
    resumo(){
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.anoDePublicacao}`

    }

    alterarAno(novoAno){
         this.anoDePublicacao = novoAno;
    }
}

//Objeto 1
let livro1 = new Livro('O códido Limpo', 'Thalyson', 2023)

//Objeto 2
let livro2 = new Livro('Rede Social', 'Tio Zuke', 2012)

//Chamando o método resumo para ambos os obejtos
console.log(`${livro1.resumo()}\n-------------\n${livro2.resumo()}`)

//alterar o ano
livro1.alterarAno(1999)

console.log(livro1.resumo())




