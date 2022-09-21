"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorios = void 0;
class Relatorios {
    constructor(escola, series, alunos) {
        this.escola = escola;
        this.escolas = escola;
        this.series = series;
        this.alunos = alunos;
    }
    relatorioEscola(escola, series) {
        console.log(escola.nome);
        this.series.forEach(serie => {
            console.log(serie);
        });
    }
    relatorioSeries(serie) {
        console.log('oi');
        const selecionaSerie = this.series.find(classe => {
            console.log('oi2');
            return classe.series === serie.series;
        });
        if (selecionaSerie) {
            console.log('oi3');
            selecionaSerie.relacaoSeries();
            return;
        }
    }
}
exports.Relatorios = Relatorios;
