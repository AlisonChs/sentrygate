'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {

    static associate(models) {
      this.belongsTo(models.Turma, { foreignKey: "Turma id" });
    }
  }
  Aluno.init({
    Nome: DataTypes.STRING,
    turma_id: DataTypes.INTEGER,
    Sobrenome: DataTypes.STRING,
    rmAluno: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};