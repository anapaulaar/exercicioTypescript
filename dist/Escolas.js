"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escolas = void 0;
class Escolas {
    constructor(nome, series, cnpj) {
        this.nome = nome;
        this.series = series;
        this.cnpj = cnpj;
    }
    cadastrarSeries(serie) {
        this.series.push(serie);
        return serie;
    }
    relatorioEscola() {
        console.log('Escola: ' + this.nome, 'CNPJ: ' + this.cnpj);
        this.series.forEach(serie => {
            console.log(serie);
        });
    }
    relatorioSeries(serie) {
        const selecionaSerie = this.series.find(classe => {
            return classe.series === serie.series;
        });
        if (selecionaSerie) {
            selecionaSerie.relacaoSeries();
            return;
        }
    }
    relatorioTotalVagas() {
        let vagas = 0;
        this.series.forEach(serie => {
            vagas = vagas + serie.vagas - serie.alunos.length;
        });
        console.log({ escola: this.nome, vagasDisponiveis: vagas });
        return vagas;
    }
}
exports.Escolas = Escolas;
