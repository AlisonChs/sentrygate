const { Model, DataTypes } = require('sequelize');

class Responsavel extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            tel: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'responsaveis'
        })
    }

}

module.exports = Responsavel;