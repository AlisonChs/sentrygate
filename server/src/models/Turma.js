const { Model, DataTypes } = require('sequelize');

class Turma extends Model {
    static init(connection) {
        super.init({
            nome_turma: DataTypes.STRING,
            horario_turma: DataTypes.STRING,
            ano_turma: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'responsaveis'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
       
    }

}

module.exports = Turma;