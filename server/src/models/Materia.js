const { Model, DataTypes } = require('sequelize');

class Materia extends Model {
    static init(connection) {
        super.init({
            nome_materia: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'materias'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsToMany(models.Turma, {
            foreignKey: 'id_materia',
            through: 'horario',
            as: 'turma'
        })

        this.belongsToMany(models.Professor, {
            foreignKey: 'id_materia',
            through: 'horario',
            as: 'professor'
        })   
    }

}

module.exports = Materia;