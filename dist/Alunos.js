"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = class Alunos {
    constructor(nome, idade, email, genero) {
        this.listAlunos = [];
        this.nome = nome;
        this.idade = idade;
        this.email = email;
        this.genero = genero;
        this.listAlunos = [];
        this.alunos = {};
    }
    cadastraAluno(nome, idade, email, genero) {
        this.alunos = { nome, idade, email, genero };
        this.listAlunos.push(this.alunos);
        return this.listAlunos;
    }
};
