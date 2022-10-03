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
        }, {
            sequelize: connection,
            tableName: 'alunos',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        //Um aluno tem apenas um responsavel
        this.belongsToMany(models.Aluno, {
            foreignKey: 'id_aluno',
            through: 'responsaveis_alunos',
            as: 'responsaveis'
        });
    }
}

module.exports = Aluno;