const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const ResponsavelController = require('../controllers/ResponsavelController');
const ContaAlunoController = require('../controllers/ContaAlunoController');
const LoginController = require('../controllers/LoginController');

const routes = express.Router();

// --FUNÇÃO DE CADASTRAR NOVOS USUARIOS--

//Cadastra um novo aluno
routes.get('/alunos', AlunoController.index);
routes.post('/cadastro/aluno', AlunoController.store);

//Cria conta do aluno
routes.get('/contas', ContaAlunoController.index);
routes.post('/cadastro/:id_aluno/conta', ContaAlunoController.store);

//Verifica o login
routes.get('/login', LoginController.index);

//Cadastra um novo responsavel
routes.get('/responsaveis/:id_relacionamento', ResponsavelController.index);
routes.post('/cadastro/:id_aluno/responsavel', ResponsavelController.store);

//Cria conta do responsavel





module.exports = routes;