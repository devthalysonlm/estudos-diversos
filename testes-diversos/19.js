//PRIMEIRA PARTE: CRIAR AS CLASSES DE LIVROS E BIBLIOTECA E CRIAR OBEJTOS DE LIVRO > 20.JS
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

    //SEGUNDA PARTE: CRIAR A FUNÇÃO DE PROCURAR LIVROS > 21.JS
    procurarLivro(titulo){
        this.acervoLivros.forEach((livro) => {
            if(livro.titulo === titulo){
                console.log(livro)
            }
        })

    }
    //TERCEIRA PARTE: CRIAR A FUNÇÃO DE EMPRESTAR OS LIVROS > 22.JS
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
    //QUARTA PARTE: CRIAR A FUNÇÃO DE DEVOLVER OS LIVROS > 23.JS
    devolverLivro(titulo){
        this.acervoLivros.forEach((livro) => {
            if(livro.titulo === titulo){
                livro.disponibilidade = true
                console.log(`Livro devolvido!`)
            }
        })
    }

}

//QUINTA PARTE: CRIAR O OBJETO BIBLIOTECA E TESTAR AS FUNÇÕES > 24.JS
let biblioteca = new Biblioteca(`Dodev`, `Rua 3000,480`,`33631094`,livros)
biblioteca.procurarLivro(`Livro2`)
biblioteca.emprestarLivro(`Livro1`)
biblioteca.devolverLivro(`Livro1`)
