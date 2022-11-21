const { Model, DataTypes } = require('sequelize');

class ResponsavelAluno extends Model {
    static init(connection) {
        super.init({
            
        }, {
            sequelize: connection,
            tableName: 'responsaveis_alunos',
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
    }
}

module.exports = ResponsavelAluno;