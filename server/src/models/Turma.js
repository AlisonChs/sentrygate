const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
    static init(connection) {
        super.init({
            nome_turma: DataTypes.STRING,
            horario_turma: DataTypes.STRING,
            ano_turma: DataTypes.INTEGER,

        }, {
            sequelize: connection,
            tableName: 'turmas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        this.belongsToMany(models.Aluno, {
            foreignKey: 'id_turma',
            through: 'alunos_turmas',
            as: 'turmas'
        })

       this.belongsToMany(models.Materia, {
        foreignKey: 'id_turma',
        through: 'horarios',
        as: 'materias'
        })

        this.belongsToMany(models.Professor, {
        foreignKey: 'id_turma',
        through: 'horarios',
        as: 'professores'
        })
    }

}

module.exports = Turma;