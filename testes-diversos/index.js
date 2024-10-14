class Aluno{
    nome
    idade
    nota
    constructor(nome,idade,nota){
      this.Nome = nome
      this.Idade = idade
      this.Nota = nota
      
    }
  }
   let arrayAlunos = [];
  
   function CadastrarAluno(nome, idade, nota, array){
    let obejtoAluno = new Aluno(nome, idade, nota)
    if(!array.some(x => x.Nome === nome)){
      array.push(obejtoAluno)
    }
    return obejtoAluno;
   }