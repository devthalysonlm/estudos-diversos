//exercício-01

/*
    Primiera solução
class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    informacoes(){
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}`
    }

    anoDePublicacao(){
        if(this.ano == 2024){
            return `Livro públicado esse ano!`
        } else {
            return `Livro publicado no ano de ${this.ano}`
        }
    }
}

let livro1 = new Livro(`Código Limpo`, 'Thlyson', 2024)


console.log(`${livro1.informacoes()}\n${livro1.anoDePublicacao()}`)

*/

//Segunda solução


class Livro{
    constructor(titulo,autor,ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    informacoes(){
        return `Título: ${this.titulo}\nAutor: ${this.autor}\nAno: ${this.ano}`
    }

    anoDePublicacao(){
        //Como descobrir a data atual
        let anoAtual = new Date().getFullYear()
        return this.ano === anoAtual ? `Publicado esse ano!`:`Publicado em ${this.ano}`
    }
}

let livro1 = new Livro('Código Limpo', 'Thalyson', 2024)

console.log(`${livro1.informacoes()}\n${livro1.anoDePublicacao()}`)