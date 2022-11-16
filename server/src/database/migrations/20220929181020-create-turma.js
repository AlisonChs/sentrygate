'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_turma: {
        allowNull:false,
        type: Sequelize.STRING
      },
      horario: {
        allowNull:false,
        type: Sequelize.STRING
      },
      ano: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('turmas');
  }
};