
const db = require('./db')

const Usuario = db.sequelize.define('usuarios', {
    nome: {
        type : db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.DOUBLE
    }
})

// Cria a tabela Usuarios
//Usuario.sync()

module.exports = Usuario