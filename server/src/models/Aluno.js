const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            cpf: DataTypes.STRING,
            rg: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }

}

module.exports = Aluno;