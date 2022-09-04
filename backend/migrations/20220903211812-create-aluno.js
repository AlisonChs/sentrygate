'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING
      },
      turma_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Campo categoria não pode ser vazio" }
        },
        references: {
          model: "Turma",
          key: "id",
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      Sobrenome: {
        type: Sequelize.STRING
      },
      rmAluno: {
        type: Sequelize.NUMBER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alunos');
  }
};