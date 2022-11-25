const { Model, DataTypes } = require('sequelize');

class ContaAluno extends Model {
    static init(connection) {
        super.init({
            
        }, {
            sequelize: connection,
            tableName: 'contas_alunos',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
    }
}

module.exports = ContaAluno;