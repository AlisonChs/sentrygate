const { Model, DataTypes } = require('sequelize');

class Aula extends Model {
    static init(connection) {
        super.init({
            quantidade_aula: DataTypes.INTEGER,
            data_aula: DataTypes.DATE,
        }, {
            sequelize: connection,
            tableName: 'aulas',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
        this.belongsTo(models.Materia, {
            foreignKey: 'id_materia',
            as: 'materias'
        })

        this.hasOne(models.Chamada, {
            foreignKey: 'id_aula',
            as: 'chamadas'
        })
    }
}

module.exports = Aula;