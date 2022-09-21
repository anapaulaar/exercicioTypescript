"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matriculas = void 0;
class Matriculas {
    constructor(escola, series, alunos) {
        this.escola = escola;
        this.escolas = escola;
        this.series = series;
        this.alunos = alunos;
    }
    inserirEscola(escola) {
        this.escolas.push(escola);
        console.log(escola);
        return escola;
    }
    inserirSerie(escola, serie) {
        const selecionaEscola = this.escolas.find(pesquisaEscolas => {
            return pesquisaEscolas.nome === escola.nome;
        });
        if (selecionaEscola) {
            selecionaEscola.cadastrarSeries(serie);
            console.log(serie);
        }
    }
    matricularAluno(escola, serie, aluno) {
        const selecionaSerie = this.series.find(pesquisaSerie => {
            return pesquisaSerie.series === serie.series;
        });
        if (serie.vagas > serie.alunos.length) {
            serie.alunos.push(aluno);
            return;
        }
    }
    relatorioTodasEscolas() {
        this.escolas.forEach(escola => {
            escola.relatorioEscola();
        });
    }
    relacaoEscolaSerie(escola, serie) {
        escola.relatorioSeries(serie);
        return escola;
    }
    relacaoTotalVagas(escola) {
        escola.relatorioTotalVagas();
        return escola;
    }
}
exports.Matriculas = Matriculas;
