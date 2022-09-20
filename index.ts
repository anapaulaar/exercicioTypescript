const CadastrarEscolas = require('./Escolas')
const CadastrarAlunos = require('./Alunos')
const addEscola = new CadastrarEscolas()
const addAluno = new CadastrarAlunos()

addEscola.createEscola('eloi','4º ano',8,290908098000102)
addEscola.createEscola('ceduc','3º ano',33,345098765000103)
console.log(addEscola.list)

addAluno.cadastraAluno('ana',9,'ana@ana.com','feminino')
addAluno.cadastraAluno('paula',8,'paula@paula.com','feminino')
console.log(addAluno.listAlunos)


