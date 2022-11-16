'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contas_responsaveis', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_responsavel: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "responsaveis",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_conta: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "contas",
          key: "id"
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
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
    await queryInterface.dropTable('contas_responsaveis');
  }
};