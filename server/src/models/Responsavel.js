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

    //Relacionamento entre as tabelas
    static associate(models) {

        //Um responsavel tem varios alunos
        this.belongsToMany(models.Aluno, {
            foreignKey: 'id_responsavel',
            through: 'responsaveis_alunos',
            as: 'alunos',
        });
    }

}

module.exports = Responsavel;