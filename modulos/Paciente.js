const db = require('./db')

const Paciente = db.sequelize.define('paciente', {
    id_paciente: {
        type : db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type : db.Sequelize.STRING,
        allowNull: false,
    },
    cpf: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    rg: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    data_nascimento: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    sexo: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    peso: {
        type: db.Sequelize.INTEGER
    },
    altura: {
        type: db.Sequelize.INTEGER
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    endereco: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    numero: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
    },
    complemento: {
        type: db.Sequelize.STRING
    },
    bairro: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    cidade: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    cep: {
        type: db.Sequelize.INTEGER(30)
    }
})

// Cria a tabela Usuarios
//Paciente.sync()

module.exports = Paciente