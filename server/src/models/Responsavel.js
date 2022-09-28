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
    static associate(models) {
        //Um responsavel tem varios alunos
        this.hasMany(models.Aluno, { foreignKey: 'responsavel_id', as: 'alunos' });
        //Um responsavel tem apenas uma conta
        //this.hasOne(models.Conta, { foreignKey: 'responsavel_id', as: 'contas' });
    }

}

module.exports = Responsavel;