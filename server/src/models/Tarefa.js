const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model {
    static init(connection) {
        super.init({
            titulo_tarefa: DataTypes.STRING,
            descricao_tarefa: DataTypes.STRING,
            entrega_tarefa: DataTypes.STRING,
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