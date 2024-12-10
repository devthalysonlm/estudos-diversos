//TERCEIRA PARTE: CRIAR A FUNÇÃO DE EMPRESTAR OS LIVROS
class Livros{
    constructor(titulo, autor, editora, anoDePublicacao, disponibilidade = true){
        this.titulo = titulo
        this. autor = autor
        this.editora = editora
        this.anoDePublicacao = anoDePublicacao
        this.disponibilidade = disponibilidade
    }
}

let livros = []
livros.push(new Livros(`Livro1`, `Thalyson`, `Editora A`, 1999))
livros.push(new Livros(`Livro2`, `Thamirys`, `Editora B`, 1997))
livros.push(new Livros(`Livro3`, `Fulano`, `Editora C`, 2000))
livros.push(new Livros(`Livro4`, `Ciclano`, `Editora D`, 2010))
livros.push(new Livros(`Livro5`, `Beutrano`, `Editora E`, 2020))

class Biblioteca{
    constructor(nome, endereco, telefone, acervoLivros = []){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoLivros = acervoLivros
    }

    BuscarLivro(titulo){
        this.acervoLivros.forEach((livro) =>{
            if(livro.titulo === titulo){
                console.log(livro)
            }
        })
    }

    EmprestarLivro(titulo){
        let emprestar = false
        this.acervoLivros.forEach((livro) => {
            if(livro.titulo === titulo){
                if(livro.disponibilidade === true){
                    livro.disponibilidade = false
                    emprestar = true
                }
            }
        })
        return emprestar
    }
    
}