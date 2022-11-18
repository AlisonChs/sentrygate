const { Model, DataTypes } = require('sequelize');

class ContaResponsavel extends Model {
    static init(connection) {
        super.init({
            
        }, {
            sequelize: connection,
            tableName: 'contas_responsaveis',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
    }
}

module.exports = ContaResponsavel;