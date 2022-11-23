'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('aulas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_materia: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "materias",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      quantidade_aula: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_aula: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('aulas');
  }
};