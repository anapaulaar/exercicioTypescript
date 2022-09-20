import { Periodos, Series } from "./Enums"

const CadastrarEscolas = require('./Escolas')
const CadastrarAlunos = require('./Alunos')
const addEscola = new CadastrarEscolas()
const addAluno = new CadastrarAlunos()

addEscola.createEscola('eloi',Series.primeiroAno,Periodos.manha,8,290908098000102)
addEscola.createEscola('ceduc',Series.terceiroAno,Periodos.tarde,33,345098765000103)
console.log(addEscola.list)

addAluno.cadastraAluno('ana',9,'ana@ana.com','feminino')
addAluno.cadastraAluno('paula',8,'paula@paula.com','feminino')
console.log(addAluno.listAlunos)


