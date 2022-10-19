const { Model, DataTypes } = require('sequelize');

class Conta extends Model {
    static init(connection) {
        super.init({
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'contas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        //Uma conta pertence apenas a um aluno
        this.belongsTo(models.Aluno, {
            foreignKey: 'id_aluno',
            as: 'alunos'
        })
    }

}

module.exports = Conta;