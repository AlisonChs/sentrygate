// Conexão com o banco de dados e as especificações sobre ele
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sentrygate',
    define: {
        timestamps: true,
        underscored: true,
    },
}