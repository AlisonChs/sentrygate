const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

// Criando uma const para usar a configuração que usei para conectar com o banco de dados
const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;