"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(series, periodo, vagas, alunos) {
        this.series = series;
        this.periodo = periodo;
        this.vagas = vagas;
        this.alunos = alunos;
        if (this.alunos.length > this.vagas) {
            throw new Error('Não Há vagas');
        }
    }
    relacaoSeries() {
        console.log({ nome: this.series, periodo: this.periodo, totalVagas: this.vagas - this.alunos.length, alunos: this.alunos });
    }
}
exports.Serie = Serie;
