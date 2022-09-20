import {IEscolas} from './interfaces'

module.exports = class Escolas implements IEscolas {
  nome: string
  serie: string
  vagas: number
  cnpj: number
  escolas:any
  list: Array<IEscolas> = []

  constructor (nome: string, serie:string, vagas: number, cnpj: number) {
    this.nome = nome
    this.serie = serie
    this.vagas = vagas
    this.cnpj = cnpj
    this.list = []
    this.escolas = []
  }

  createEscola (nome: IEscolas, serie:IEscolas, vagas: IEscolas, cnpj: IEscolas) {
    this.escolas = {nome, serie, vagas, cnpj}
    this.list.push(this.escolas)
    return this.list
  }
}
