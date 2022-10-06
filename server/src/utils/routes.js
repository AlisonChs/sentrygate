const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const ResponsavelController = require('../controllers/ResponsavelController');


const routes = express.Router();

//Função de cadastrar usuarios
routes.get('/alunos', AlunoController.index);
routes.post('/cadastro/aluno', AlunoController.store);
routes.get('/responsaveis', ResponsavelController.index);
routes.post('/cadastro/:id_aluno/responsavel', ResponsavelController.store);



module.exports = routes;