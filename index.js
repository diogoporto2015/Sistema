const mysql = require('mysql2')
const express = require('express');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const paciente = require("./modulos/Paciente")
const exame = require("./modulos/Exame")
const path = require('path');
const app = express();
const dp = require('express-handlebars');
const handlebars = dp.create({});


//Inseri aparencia, imagens comando dos butões em js
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/fullcalendar-6.1.4/dist', express.static('fullcalendar-6.1.4/dist'));
app.use('/fullcalendar-6.1.4/packages/core/locales/', express.static('fullcalendar-6.1.4/packages/core/locales'));


app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.use('/imagens', express.static('imagens'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//conectar ao banco de dados para logar no sistema
const connection = mysql.createConnection({
    host: "192.168.1.66",
    user: "diogoporto",
    password: "d@172709",
    database: "MEDIMAGEM"
});
connection.connect(function(error){
    if (error) throw error
    else 
    console.log("Conectado ao banco de dados com Sucesso!")
    
});


// Testeando com Handlebars
app.get ('/lista', (req, res) => {
    
   res.render('lista')
}); 


// Testando leitura do Banco de Dados







app.get ("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/ficha.html", function (req, res){
    res.sendFile(__dirname + "/ficha.html");
})

app.get ("/mamografia.html", function(req, res) {
    res.sendFile(__dirname + "/mamografia.html");
});

app.post("/index.html", encoder, (req, res) => {
    var nome = req.body.nome;
    var senha = req.body.senha;

    connection.query("select * from usuarios where nome = ? and senha = ?", [nome, senha], (error, results, fields) => {
        if(results.length > 0){
            res.redirect("/ficha.html");
        }else {
            res.redirect("/");
        }
        res.end();
    })
})

// Cadastra Ficha de Pacientes
app.post('/Ficha.html', function(req, res){
    paciente.create({
        nome: req.body.nome,
        cpf: req.body.cpf,
        rg: req.body.rg,
        data_nascimento: req.body.data_nascimento,
        sexo: req.body.sexo,
        peso: req.body.peso,
        altura: req.body.altura,
        telefone: req.body.telefone,
        celular: req.body.celular,
        email: req.body.email,
        endereco: req.body.endereco,
        numero: req.body.numero,
        complemento: req.body.complemento,
        bairro: req.body.bairro,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep
     
    }),exame.create({
        tipo_exame: req.body.tipo_exame,
        nome_exame: req.body.nome_exame,
        comentario: req.body.comentario,
        data_exame: req.body.data_exame,
        data_entrega: req.body.data_entrega,
        convenio: req.body.convenio,
        medico: req.body.altura
    }).then(function(){
        res.sendFile(path.join(__dirname+ '/Ficha.html'));
    }).catch(function(erro){
        res.send('Erro: Nã0 foi cadastrado!' + erro)
        return 
    })
})




app.listen(8080);
console.log("Servidor Rodando e Funcionando! localhost:8080");
