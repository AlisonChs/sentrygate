const { Model, DataTypes } = require('sequelize');

class Chamada extends Model {
    static init(connection) {
        super.init({
            falta: DataTypes.BOOLEAN,
        }, {
            sequelize: connection,
            tableName: 'chamadas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsTo(models.Aluno, {
            foreignKey: 'id_aluno',
            as: 'alunos'
        })

        this.belongsTo(models.Aula, {
            foreignKey: 'id_aula',
            as: 'aulas'
        })   
    }

}

module.exports = Chamada;