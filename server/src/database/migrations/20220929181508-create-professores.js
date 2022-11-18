'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('professores', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobrenome_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_social_professor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nasc_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genero_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rg_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexo_professor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cep_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bairro_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rua_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tel_professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      matricula_professor: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('professores');
  }
};