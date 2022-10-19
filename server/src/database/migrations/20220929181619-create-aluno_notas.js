'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('alunos_notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      id_materia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "materias",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      id_turma: {
        allowNull: false,
        type: Sequelize.INTEGER,
        reference: {
          model: "turmas",
          key: "id"
        },
        onUpdate: 'cascade', 
        onDelete: 'cascade'
      },
      nome: {
        allowNull:false,
        type: Sequelize.STRING
      },
      nota: {
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      bimestre: {
        allowNull:false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('alunos_notas');
  }
};