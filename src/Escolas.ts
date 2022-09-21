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

  relatorioEscola () {
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

  relatorioTotalVagas () {
    let vagas:number = 0
    this.series.forEach(serie => {
      vagas = vagas + serie.vagas - serie.alunos.length
    })
    console.log({escola: this.nome, vagasDisponiveis:vagas})
    return vagas
  }
}
