const express = require('express');
const AlunoController = require('../controllers/AlunoController');
const ResponsavelController = require('../controllers/ResponsavelController');


const routes = express.Router();

routes.get('/alunos', AlunoController.index);
routes.post('/aluno', AlunoController.store);

routes.get('/responsaveis', ResponsavelController.index);
routes.post('/:aluno_id/responsavel', ResponsavelController.store);



module.exports = routes;