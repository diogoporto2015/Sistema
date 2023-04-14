const mysql = require('mysql2')
const express = require('express');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const paciente = require("./modulos/Paciente")
const exame = require("./modulos/Exame")
const path = require('path');
const ejs = require('ejs');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

//Inseri aparencia, imagens comando dos butões em js
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imagens', express.static('imagens'));
app.use('/fullcalendar-6.1.4/dist', express.static('fullcalendar-6.1.4/dist'));
app.use('/fullcalendar-6.1.4/packages/core/locales/', express.static('fullcalendar-6.1.4/packages/core/locales'));

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
    console.log("Conectado ao banco de dados com Sucesso!")
});


// Listar registro da tabela  do banco de dados Mysql
app.get('/cliente/:cpf', async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'senha',
        database: 'nome_do_banco_de_dados'
      });
  
      const [rows, fields] = await connection.execute('SELECT * FROM tabela_clientes WHERE cpf = ?', [cpf]);
  
      if (rows.length > 0) {
        const registro = rows[0];
        const html = `
          <form>
            <label for="nome">Nome:</label>
            <input type="text" name="nome" value="${registro.nome}"><br>
  
            <label for="cpf">CPF:</label>
            <input type="text" name="cpf" value="${registro.cpf}"><br>
  
            <label for="endereco">Endereço:</label>
            <input type="text" name="endereco" value="${registro.endereco}"><br>
  
            <label for="telefone">Telefone:</label>
            <input type="text" name="telefone" value="${registro.telefone}"><br>
          </form>
        `;
        res.send(html);
      } else {
        res.send('Registro não encontrado');
      }
  
      await connection.end();
    } catch (error) {
      console.log(error);
      res.send('Ocorreu um erro ao buscar o registro');
    }
  });

// carregar a pagina
app.get ("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// carregar a pagina
app.get("/ficha.html", function (req, res){
    res.sendFile(__dirname + "/ficha.html");
})

// carregar a pagina
app.get ("/mamografia.html", function(req, res) {
    res.sendFile(__dirname + "/mamografia.html");
});

// logar com os dados do banco de dados do Mysql
app.post("/index.html", encoder, (req, res) => {
    var nome = req.body.nome;
    var senha = req.body.senha;

    connection.query("select * from usuarios where nome = ? and senha = ?", [nome, senha], (error, resultado, fields) => {
        if(resultado.length > 0){
            res.redirect("/ficha.html");
        }else {
            res.redirect("/");
        }
        res.end();
    })
})

// Cadastra Ficha de Pacientes e exames
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