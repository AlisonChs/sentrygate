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
            as: 'responsavel'
        });


        //Um aluno tem apenas uma conta
        this.belongsToMany(models.Conta, {
            foreignKey: 'id_aluno',
            through: 'contas_alunos',
            as: 'conta'
        })

        // Um aluno tem muitas turma
        this.belongsToMany(models.Turma, {
            foreignKey: 'id_aluno',
            through: 'alunos_turmas',
            as: 'turmas'
        })

        this.hasOne(models.Chamada, {
            foreignKey: 'id_aula',
            as: 'chamadas'
        })
    }
}

module.exports = Aluno;