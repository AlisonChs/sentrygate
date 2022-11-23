'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('responsaveis', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nasc_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel_responsavel: {
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
    return queryInterface.dropTable('responsaveis');
  }
};