class Livro{
    constructor(titulo, autor, editora, anoDePublicacao, disponibilidade = true){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoDePublicacao = anoDePublicacao
        this.disponibilidade = disponibilidade
    }
}

let livros = []
livros.push(new Livro(`Livro1`, `Thalyson`, `Editora A`, 1999))
livros.push(new Livro(`Livro2`, `Thamirys`, `Editora B`, 1997))

class Biblioteca{
    constructor(nome, endereco, telefone, acervoLivros = []){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoLivros = acervoLivros
    }

    procurarLivro(titulo){
        this.acervoLivros.forEach((livro) => {
            if(livro.titulo === titulo){
                console.log(livro)
            }
        })

    }
    emprestarLivro(titulo){
        let emprestar = false
        this.acervoLivros.forEach((livro) => {
            if(livro.titulo === titulo){
                if(livro.disponibilidade){
                    livro.disponibilidade = false
                    emprestar = true
                    console.log(`${livro.titulo} emprestado`)
                }
            }
        })
        return emprestar
    }
    //cria funçao faz um for. each, pegunta de o titulo do livro e igual a livro coloca a disponibilidade como true printar devolver livro
    devolverLivro(titulo){
        livros.forEach((livro => {
            if(livro.titulo === titulo){
                livro.disponibilidade = true
                console.log(`Livro devolvido!`)
            }
        }))
    }

}


let biblioteca = new Biblioteca(`Dodev`, `Rua 3000,480`,`33631094`,livros)
biblioteca.procurarLivro(`Livro2`)
biblioteca.emprestarLivro(`Livro1`)
biblioteca.devolverLivro(`Livro1`)
