const { Model, DataTypes } = require('sequelize');

class Professor extends Model {
    static init(connection) {
        super.init({
            nome_professor: DataTypes.STRING,
            sobrenome_professor: DataTypes.STRING,
            nome_social_professor: DataTypes.STRING,
            data_nasc_professor: DataTypes.STRING,
            genero_professor: DataTypes.STRING,
            rg_professor: DataTypes.STRING,
            cpf_professor: DataTypes.STRING,
            cep_professor: DataTypes.STRING,
            cidade_professor: DataTypes.STRING,
            bairro_professor: DataTypes.STRING,
            rua_professor: DataTypes.STRING,
            tel_professor: DataTypes.STRING,

        }, {
            sequelize: connection,
            tableName: 'professores',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsToMany(models.Materia, {
            foreignKey: 'id_prof',
            through: 'horarios',
            as: 'materias'
        })

        this.belongsToMany(models.Turma, {
            foreignKey: 'id_prof',
            through: 'horarios',
            as: 'turmas'
        })
    }
}

module.exports = Professor;