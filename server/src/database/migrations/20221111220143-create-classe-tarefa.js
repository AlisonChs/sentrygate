'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classes_tarefas', {
      id_tarefa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tarefas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_professor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'professores', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_materia: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'materias', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'turmas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('classes_tarefas');
  }
};