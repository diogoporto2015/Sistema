const mysql = require('mysql2')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuração do middleware para obter os dados do corpo do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Configurações de conexão
const connection = mysql.createConnection({
  host: "192.168.1.66",
    user: "diogoporto",
    password: "d@172709",
    database: "MEDIMAGEM"
});

// Conectando ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

app.get ("/cd.html", function(req, res) {
  res.sendFile(__dirname + "/cd.html");
});

// Rota para lidar com o envio do formulário
app.post('/cadastrar', (req, res) => {
  const { nome, email,  tipo_exame } = req.body;

  // Query para inserir os dados na primeira tabela
  const query1 = `INSERT INTO cliente (nome, email) VALUES (?, ?)`;
  const values1 = [nome, email];

  // Query para inserir os dados na segunda tabela usando o ID inserido na primeira tabela
  const query2 = `INSERT INTO idade (cliente_id, tipo_exame) VALUES (LAST_INSERT_ID(), ?)`;
  const values2 = [tipo_exame];

  // Executando as queries sequencialmente
  connection.query(query1, values1, (err, result1) => {
    if (err) {
      console.error('Erro ao inserir na cliente:', err);
      res.status(500).send('Erro ao cadastrar');
      return;
    }

    connection.query(query2, values2, (err, result2) => {
      if (err) {
        console.error('Erro ao inserir na idade:', err);
        res.status(500).send('Erro ao cadastrar');
        return;
      }

      console.log('Dados cadastrados com sucesso!');
      res.status(200).send('Dados cadastrados com sucesso!');
    });
  });
});

// Inicie o servidor
app.listen(8080);
console.log("Servidor Rodando e Funcionando! localhost:8080");