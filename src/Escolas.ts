// import {IEscolas} from './interfaces'
import { EPeriodos, ESeries } from './Enums'
import { Alunos } from './Alunos'
import { Serie } from './Series'

export class Escolas {
  nome: string
  series: Serie[]
  cnpj: number

  constructor (nome: string, series:Serie[], cnpj: number) {
    this.nome = nome
    this.series = series
    this.cnpj = cnpj
  }

  cadastrarSeries (serie: Serie) {
    this.series.push(serie)
    return serie
  }

  relatorioEscola ():void {
    console.log('Escola: ' + this.nome, 'CNPJ: ' + this.cnpj)
    this.series.forEach(serie => {
      console.log(serie)
    })
  }

  relatorioSeries (serie: Serie) {
    const selecionaSerie = this.series.find(classe => {
      return classe.series === serie.series
    })
    if(selecionaSerie) {
      selecionaSerie.relacaoSeries()
      return
    }
  }
}
