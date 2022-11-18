const { Model, DataTypes } = require('sequelize');

class ContaProfessor extends Model {
    static init(connection) {
        super.init({
            
        }, {
            sequelize: connection,
            tableName: 'contas_professores',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
    }
}

module.exports = ContaProfessor;