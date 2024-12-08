//CRIANDO A CLASSE LIVRO 

class Livros{
    constructor(titulo, autor, editora, anoDePublicacao, disponibilidade = true){
        this.titulo = titulo
        this.autor = autor
        this.editora = editora
        this.anoDePublicacao = anoDePublicacao
        this.disponibilidade = disponibilidade
    }
}

let livros = []
livros.push(new Livros(`Livro1`, `Thalyson`, `Editora A`, 1999))
livros.push(new Livros(`Livro2`, `Eunaplay`, `Editora B`, 1992))
livros.push(new Livros(`Livro3`, `Rhony`, `Editora C`, 1980))

class Biblioteca{
    constructor(nome, endereco, telefone, acervoDeLivros = []){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.acervoDeLivros = acervoDeLivros
    }
}