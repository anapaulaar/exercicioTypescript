import { IAlunos } from "./interfaces"

export class Alunos implements IAlunos {
  nome: string
  idade: number
  email: string
  genero: string

  constructor (  nome: string, idade: number, email: string, genero: string) {
    this.nome = nome
    this.idade = idade
    this.email = email
    this.genero = genero
  }
}
