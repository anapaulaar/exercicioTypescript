"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Enums_1 = require("./Enums");
const Alunos_1 = require("./Alunos");
const Series_1 = require("./Series");
const Escolas_1 = require("./Escolas");
const Matriculas_1 = require("./Matriculas");
const matriculaEscola = new Matriculas_1.Matriculas([], [], []);
const Eloi = new Escolas_1.Escolas('Eloi', [], 123);
const Loretinho = new Escolas_1.Escolas('Vila dos Sargentos', [], 456);
matriculaEscola.inserirEscola(Eloi);
matriculaEscola.inserirEscola(Loretinho);
const Primeiro = new Series_1.Serie(Enums_1.ESeries.primeiroAno, Enums_1.EPeriodos.manha, 40, []);
const Terceiro = new Series_1.Serie(Enums_1.ESeries.terceiroAno, Enums_1.EPeriodos.tarde, 20, []);
const Ana = new Alunos_1.Alunos('ana', 9, 'ana@ana.com', 'feminino');
const Paula = new Alunos_1.Alunos('paula', 8, 'paula@paula.com', 'feminino');
matriculaEscola.inserirSerie(Eloi, Primeiro);
matriculaEscola.inserirSerie(Loretinho, Terceiro);
matriculaEscola.matricularAluno(Eloi, Primeiro, Ana);
matriculaEscola.matricularAluno(Loretinho, Terceiro, Paula);
console.log('Relatório todas as escolas:');
matriculaEscola.relatorioTodasEscolas();
console.log('Relação escola e serie especificos:');
matriculaEscola.relacaoEscolaSerie(Eloi, Primeiro);
matriculaEscola.relacaoEscolaSerie(Loretinho, Terceiro);
console.log('Total de Vagas por escola:');
matriculaEscola.relacaoTotalVagas(Eloi);
matriculaEscola.relacaoTotalVagas(Loretinho);
