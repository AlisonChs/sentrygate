const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Aluno = require('../models/Aluno');
const Aula = require('../models/Aula');
const Conta = require('../models/Conta');
const ContaAluno = require('../models/ContaAluno');
const Materia = require('../models/Materia');
const Professor = require('../models/Professor');
const Responsavel = require('../models/Responsavel');
const ResponsavelAluno = require('../models/ResponsavelAluno');
const Tarefa = require('../models/Tarefa');
const Turma = require('../models/Turma');
const Chamada = require('../models/Chamada');

// Criando uma const para usar a configuração que usei para conectar com o banco de dados
const connection = new Sequelize(dbConfig);

Aluno.init(connection);
Conta.init(connection);
ContaAluno.init(connection);
Materia.init(connection)
Professor.init(connection);
Responsavel.init(connection);
ResponsavelAluno.init(connection);
Tarefa.init(connection);
Turma.init(connection);
Aula.init(connection);
Chamada.init(connection);


Aluno.associate(connection.models);
Conta.associate(connection.models);
Responsavel.associate(connection.models);
Turma.associate(connection.models);
Aula.associate(connection.models);
Professor.associate(connection.models);
Materia.associate(connection.models);
Chamada.associate(connection.models);




module.exports = connection;