import {ESeries, EPeriodos} from './Enums'
import {Alunos} from './Alunos'

export class Serie {
  constructor (public series: ESeries, public periodo: EPeriodos, public vagas: number, public alunos: Alunos[]){
    if(this.alunos.length > this.vagas) {
      throw new Error('Não Há vagas')
    }
  }

  relacaoSeries () {
    console.log({ nome: this.series, periodo: this.periodo, alunos: this.alunos, totalVagas: this.vagas - this.alunos.length})
  }
}
