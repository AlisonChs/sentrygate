'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {

    static associate(models) {
      this.hasOne(models.Aluno, { foreignKey: 'turma_id' });
    }
  }
  Turma.init({
    NomeTurma: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turma',
  });
  return Turma;
};