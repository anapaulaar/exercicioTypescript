"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = class Escolas {
    constructor(nome, serie, periodo, vagas, cnpj) {
        this.list = [];
        this.nome = nome;
        this.serie = serie;
        this.periodo = periodo;
        this.vagas = vagas;
        this.cnpj = cnpj;
        this.list = [];
        this.escolas = [];
    }
    createEscola(nome, serie, periodo, vagas, cnpj) {
        this.escolas = { nome, serie, vagas, cnpj };
        this.list.push(this.escolas);
        return this.list;
    }
};
