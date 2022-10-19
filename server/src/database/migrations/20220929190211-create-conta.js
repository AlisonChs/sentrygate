'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('contas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_aluno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "alunos",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_responsavel: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "responsaveis",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_professor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "professores",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha: {
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contas');
  }
};