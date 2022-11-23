const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model {
    static init(connection) {
        super.init({
            titulo: DataTypes.STRING,
            descricao: DataTypes.STRING,
            dataDeEntrega: DataTypes.STRING,
        }, {
            sequelize: connection,
            tableName: 'tarefas'
        })
    }

    //Relacionamento entre as tabelas
    static associate(models) {
       
    }

}

module.exports = Tarefa;