const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(connection) {
        super.init({
            nome_aluno: DataTypes.STRING,
            sobrenome_aluno: DataTypes.STRING,
            data_nasc_aluno: DataTypes.STRING,
            genero_aluno: DataTypes.STRING,
            rg_aluno: DataTypes.STRING,
            cpf_aluno: DataTypes.STRING,
            cep_aluno: DataTypes.STRING,
            cidade_aluno: DataTypes.STRING,
            bairro_aluno: DataTypes.STRING,
            rua_aluno: DataTypes.STRING,
            complemento_aluno: DataTypes.STRING,
            tel_aluno: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'alunos',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {

        //Um aluno tem apenas um responsavel
        this.belongsToMany(models.Responsavel, {
            foreignKey: 'id_aluno',
            through: 'responsaveis_alunos',
            as: 'responsaveis'
        });

        //Um aluno trm apenas uma conta
        this.hasMany(models.Conta, {
            foreignKey: 'id_aluno',
            as: 'contas'
        })
    }
}

module.exports = Aluno;