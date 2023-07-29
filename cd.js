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

app.get ("/ficha.html", function(req, res) {
  res.sendFile(__dirname + "/ficha.html");
});

// Rota para lidar com o envio do formulário
app.post('/cadastrar', (req, res) => {
  const { nome, cpf, rg, data_nascimento, sexo, peso, altura, telefone, celular, email, endereco, numero, complemento, bairro, cidade, estado, cep, tipo_exame, nome_exame, data_exame, data_entrega, convenio, medico, comentario } = req.body;


// Verificar se o nome já existe na tabela1
const checkQuery = `SELECT nome FROM pacientes WHERE nome = ?`;
const checkValues = [nome];

connection.query(checkQuery, checkValues, (err, results) => {
  if (err) {
    console.error('Erro ao verificar nome na pacientes:', err);
    res.status(500).send('Erro ao cadastrar');
    return;
  }

  // Se o nome já existir, enviar resposta JSON com mensagem de erro
  if (results.length > 0) {
    return res.json({ error: 'O nome já está cadastrado. Por favor, use um nome diferente.' });
  }
  

  // Query para inserir os dados na primeira tabela
  const query1 = `INSERT INTO pacientes (nome, cpf, rg, data_nascimento, sexo, peso, altura, telefone, celular, email, endereco, numero, complemento, bairro, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values1 = [nome, cpf, rg, data_nascimento, sexo, peso, altura, telefone, celular, email, endereco, numero, complemento, bairro, cidade, estado, cep];

  // Query para inserir os dados na segunda tabela usando o ID inserido na primeira tabela
  const query2 = `INSERT INTO exames (paciente_id, tipo_exame, nome_exame, data_exame, data_entrega, convenio, medico, comentario ) VALUES (LAST_INSERT_ID(), ?, ?, ?, ?, ?, ?, ? )`;
  const values2 = [tipo_exame, nome_exame, data_exame, data_entrega, convenio, medico, comentario ];

  // Executando as queries sequencialmente
  connection.query(query1, values1, (err, result1) => {
    if (err) {
      console.error('Erro ao inserir na paciente:', err);
      res.status(500).send('Erro ao cadastrar');
      return;
    }

    connection.query(query2, values2, (err, result2) => {
      if (err) {
        console.error('Erro ao inserir na exame:', err);
        res.status(500).send('Erro ao cadastrar');
        return;
      }

      console.log('Dados cadastrados com sucesso!');
       // Redirecionar para a página de sucesso após o cadastro ser concluído com êxito
       res.json({ success: true });
    });
  });
});
});

// Inicie o servidor
app.listen(8080);
console.log("Servidor Rodando e Funcionando! localhost:8080");