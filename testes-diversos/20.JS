//PRIMEIRA PARTE: CRIAR AS CLASSES DE LIVROS E BIBLIOTECA E CRIARA OBEJTOS DE LIVRO

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

class Bibiloteca{
    constructor(nome, endereco, telefone, acervoLivros = []){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoLivros = acervoLivros
    }
}