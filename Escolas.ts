import {IEscolas} from './interfaces'
import { Periodos, Series } from "./Enums"

module.exports = class Escolas implements IEscolas {
  nome: string
  serie: Series
  periodo: Periodos
  vagas: number
  cnpj: number
  escolas:any
  list: Array<IEscolas> = []

  constructor (nome: string, serie:Series, periodo: Periodos, vagas: number, cnpj: number) {
    this.nome = nome
    this.serie = serie
    this.periodo = periodo
    this.vagas = vagas
    this.cnpj = cnpj
    this.list = []
    this.escolas = []
  }

  createEscola (nome: IEscolas, serie:Series, periodo:Periodos, vagas: IEscolas, cnpj: IEscolas) {
    this.escolas = {nome, serie, vagas, cnpj}
    this.list.push(this.escolas)
    return this.list
  }
}
