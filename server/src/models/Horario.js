const { Model, DataTypes } = require('sequelize');

class Horario extends Model {
    static init(connection) {
        super.init({
            
        }, {
            sequelize: connection,
            tableName: 'horarios',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
    }
}

module.exports = Horario;