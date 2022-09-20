import { IAlunos } from "./interfaces"

module.exports = class Alunos implements IAlunos {
  nome: string
  idade: number
  email: string
  genero: string
  listAlunos: Array<IAlunos> = []
  alunos:any

  constructor (  nome: string, idade: number, email: string, genero: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
    this.genero = genero
    this.listAlunos = []
    this.alunos = {}
  }

  cadastraAluno (nome: IAlunos, idade: IAlunos, email: IAlunos, genero: IAlunos) {
    this.alunos = {nome, idade, email, genero}
    this.listAlunos.push(this.alunos)
    return this.listAlunos
  }
}
