const { Model, DataTypes } = require('sequelize');

class Materia extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'materias'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        
    }

}

module.exports = Materia;