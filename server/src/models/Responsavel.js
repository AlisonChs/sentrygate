const { Model, DataTypes } = require('sequelize');

class Responsavel extends Model {
    static init(connection) {
        super.init({
            nome_responsavel: DataTypes.STRING,
            sobrenome_responsavel: DataTypes.STRING,
            data_nasc_responsavel: DataTypes.STRING,
            cpf_responsavel: DataTypes.STRING,
            rg_responsavel: DataTypes.STRING,
            tel_responsavel: DataTypes.STRING,
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
            as: 'aluno',
        });
    }

}

module.exports = Responsavel;