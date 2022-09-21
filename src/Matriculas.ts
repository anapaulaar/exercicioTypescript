import { Alunos } from "./Alunos"
import { Serie } from "./Series"
import { Escolas } from "./Escolas"

export class Matriculas {
  escolas: Escolas[]
  series: Serie[]
  alunos: Alunos[]
  constructor ( public escola:Escolas[], series:Serie[], alunos:Alunos[] ) {
    this.escolas = escola
    this.series = series
    this.alunos = alunos
  }

  inserirEscola (escola:Escolas) {
    this.escolas.push(escola)
    console.log(escola)
    return escola
  }

  inserirSerie (escola: Escolas, serie: Serie) {
    const selecionaEscola = this.escolas.find(pesquisaEscolas => { 
      return pesquisaEscolas.nome === escola.nome
    })
    if (selecionaEscola) {
      selecionaEscola.cadastrarSeries(serie)
      console.log(serie)
    }
    
  }


  matricularAluno (escola: Escolas, serie: Serie, aluno: Alunos) {
    const selecionaSerie = this.series.find(pesquisaSerie => {
      return pesquisaSerie.series === serie.series
    })

    if (serie.vagas > serie.alunos.length) {
      serie.alunos.push(aluno)
      return
    }
  } 

  relatorioTodasEscolas () {
    this.escolas.forEach(escola => {
      escola.relatorioEscola()
    })
  }

  relacaoEscolaSerie (escola: Escolas, serie: Serie) {
    escola.relatorioSeries(serie)
    return escola
  }

  relacaoTotalVagas (escola: Escolas) {
    escola.relatorioTotalVagas()
    return escola
  }
}
