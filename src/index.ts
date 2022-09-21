import { ESeries, EPeriodos } from "./Enums"
import { Alunos } from "./Alunos"
import { Serie } from "./Series"
import { Escolas } from "./Escolas"
import { Matriculas } from "./Matriculas"

const matriculaEscola = new Matriculas([],[],[])
const Eloi = new Escolas('Eloi',[],123)
const Loretinho = new Escolas('Vila dos Sargentos',[],456)
matriculaEscola.inserirEscola(Eloi)
//matriculaEscola.inserirEscola(Loretinho)

const Primeiro = new Serie(ESeries.primeiroAno, EPeriodos.manha,40,[])
const Ana = new Alunos('ana',9,'ana@ana.com','feminino')
const Paula = new Alunos('paula',8,'paula@paula.com','feminino')

matriculaEscola.inserirSerie(Eloi,Primeiro)

matriculaEscola.matricularAluno(Eloi,Primeiro,Ana)

console.log('Relatório todas as escolas')
matriculaEscola.relatorioTodasEscolas()

console.log('Relação escola e serie especificos')
matriculaEscola.relacaoEscolaSerie(Eloi,Primeiro)

// matriculaEscola.relatorioTotalVagas()
