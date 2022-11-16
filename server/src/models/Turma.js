const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
    static init(connection) {
        super.init({
            nome_turma: DataTypes.STRING,
            horario: DataTypes.STRING,
            ano: DataTypes.INTEGER,
        }, {
            sequelize: connection,
            tableName: 'turmas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

       // Uma turma tem muitos alunos
       this.belongsToMany(models.Aluno, {
        foreignKey: 'id_turma',
        through: 'alunos_turmas',
        as: 'alunos'
    })
    }

}

module.exports = Turma;