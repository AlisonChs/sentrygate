const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            data_nasc: DataTypes.STRING,
            genero: DataTypes.STRING,
            rg: DataTypes.STRING,
            cpf: DataTypes.STRING,
            cep: DataTypes.STRING,
            cidade: DataTypes.STRING,
            bairro: DataTypes.STRING,
            rua: DataTypes.STRING,
            complemento: DataTypes.STRING,
            tel: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }

}

module.exports = Aluno;