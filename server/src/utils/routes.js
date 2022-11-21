const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const ResponsavelController = require('../controllers/ResponsavelController');
const ContaAlunoController = require('../controllers/ContaAlunoController');
const LoginController = require('../controllers/LoginController');
const ProfessorController = require('../controllers/ProfessorController');
const TurmaController = require('../controllers/TurmaController');
const MateriaController = require('../controllers/MateriaController')
const AulaController = require('../controllers/AulaController');
const ChamadaController = require('../controllers/ChamadaController');

const routes = express.Router();

// --FUNÇÃO DE CADASTRAR NOVOS USUARIOS--

//Cadastra um novo aluno
routes.get('/alunos', AlunoController.index);
routes.post('/cadastro/aluno', AlunoController.store);

//Cria conta do aluno
routes.get('/contas/:id_aluno', ContaAlunoController.index);
routes.post('/cadastro/aluno/conta', ContaAlunoController.store);

//Verifica o login
routes.post('/login', LoginController.index);

//Cadastra um novo responsavel
routes.get('/responsaveis/:id_aluno', ResponsavelController.index);
routes.post('/cadastro/responsavel', ResponsavelController.store);

//Cria conta do responsavel

// Cadastra um novo professor
routes.get('/professores', ProfessorController.index);
routes.post('/cadastro/professor', ProfessorController.store);

// Cadastra uma nova turma
routes.get('/turmas', TurmaController.index);
routes.post('/cadastro/turma', TurmaController.store);
routes.post('/cadastro/turma/horario', TurmaController.storeHorario);

// Cadastra uma nova matéria
routes.get('/materias', MateriaController.index);
routes.post('/cadastro/materia', MateriaController.store);

// Cadastra uma nova aula
routes.get('/aulas', AulaController.index);
routes.post('/cadastro/materia/:id_materia/aula', AulaController.store);

// Cadastra uma nova chamada
routes.get('/chamadas', ChamadaController.index);
routes.post('/cadastro/aluno/:id_aluno/aula/:id_aula/chamada', ChamadaController.store);


module.exports = routes;