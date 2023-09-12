const Sequelize = require("sequelize")

//Conexão  com Banco de Dados do MySQL
const sequelize = new Sequelize('cadastro', 'diogoporto', 'd@172709',{
    host: '192.168.1.66',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}