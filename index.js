const mysql = require('mysql2')
const express = require('express');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();



//Inseri aparencia, imagens comando dos butões em js
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/fullcalendar-6.1.4/dist', express.static('fullcalendar-6.1.4/dist'));
app.use('/fullcalendar-6.1.4/packages/core/locales/', express.static('fullcalendar-6.1.4/packages/core/locales'));

app.use('/imagens', express.static('imagens'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//conectar ao banco de dados
const connection = mysql.createConnection({
    host: "192.168.1.66",
    user: "diogoporto",
    password: "d@172709",
    database: "MEDIMAGEM"
});

connection.connect(function(error){
    if (error) throw error
    else console.log("Conectado ao banco de dados com Sucesso!")

});

app.get ("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/inicio.html", function (req, res){
    res.sendFile(__dirname + "/inicio.html");
})

app.get ("/agenda.html", function(req, res) {
    res.sendFile(__dirname + "/agenda.html");
});



app.post("/index.html", encoder, (req, res) => {
    var nome = req.body.nome;
    var senha = req.body.senha;

    connection.query("select * from usuarios where nome = ? and senha = ?", [nome, senha], (error, results, fields) => {
        if(results.length > 0){
            res.redirect("/inicio.html");
        }else {
            res.redirect("/index.html");
        }
        res.end();
    })
})






app.listen(8080);
console.log("Servidor Rodando e Funcionando! localhost:8080");
/*
*/