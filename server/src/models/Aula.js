const { Model, DataTypes } = require('sequelize');

class Aula extends Model {
    static init(connection) {
        super.init({
            quantidade_aula: DataTypes.STRING,
            data_aula: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'aulas',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        
    }
}

module.exports = Aula;