'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nasc_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cep_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complemento_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel_aluno: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('alunos');
  }
};