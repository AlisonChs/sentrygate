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

    static associate(models) {
        //Um aluno tem varios responsaveis
        this.hasMany(models.Responsavel, { foreignKey: 'aluno_id', as: 'responsaveis' });
        //Um aluno tem apenas uma conta
        //this.hasOne(models.Conta, { foreignKey: 'aluno_id', as: 'contas' });
    }
}

module.exports = Aluno;