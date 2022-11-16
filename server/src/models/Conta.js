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
        this.belongsToMany(models.Aluno, {
            foreignKey: 'id_conta',
            through: 'contas_alunos',
            as: 'aluno'
        })
    }

}

module.exports = Conta;