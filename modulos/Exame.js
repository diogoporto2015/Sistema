const db = require('./db')

//cria a tabela no banco de dados no mysql
const Exame = db.sequelize.define('exame', {
    id_tipo_exame: {
        type : db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_exame: {
        type : db.Sequelize.STRING,
        allowNull: false,
    },
    nome_exame: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    comentario: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    data_exame: {
        type: db.Sequelize.DATE,
        allowNull: false,
    },
    data_entrega: {
        type: db.Sequelize.DATE,
        allowNull: false,
    },
    convenio: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    medico: {
        type: db.Sequelize.STRING
    }
})




// Cria a tabela Usuarios
//Exame.sync()

module.exports = Exame