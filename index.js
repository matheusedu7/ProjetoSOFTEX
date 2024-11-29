const express = require('express');
const pool = require('./db/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Teste de conexão com o banco
app.get('/ping', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT 1 AS status');
    res.status(200).json({ status: result[0].status, message: 'Banco conectado!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar no banco.', error: error.message });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// REQUISIÇÃO TESTE
app.get('/test-db', async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT 1 + 1 AS result');
      res.json({ success: true, result: rows[0].result });
    } catch (error) {
      console.error('Erro ao testar o banco de dados:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  //  POST  // ROTA para CADASTRAR CLIENTES
  app.post('/clientes', async (req, res) => {
    const {
      nome, nasc, civil, naturalidade, nacionalidade,
      escolaridade, profissao, situacao, cpf, rg, renda, comp_renda
    } = req.body;
  
    try {
      const [result] = await pool.query(
        `INSERT INTO clientes (
          data_inclusao, nome_cliente, data_nasc, estado_civil,
          naturalidade, nacionalidade, escolaridade, profissao, situacao,
          cpf_cliente, rg_cliente, renda_mensal, comprovante_renda
        ) VALUES (NOW(), ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [nome, nasc, civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf, rg, renda, comp_renda]
      );
  
      res.status(201).json({ id: result.insertId, nome, nasc });
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  //  GET  // ROTA para LISTAR TODOS OS CLIENTES
  app.get('/clientes', async (req, res) => {
    try {
      const [rows] = await pool.query(
        `SELECT 
          id_clientes AS id, nome_cliente AS nome, data_nasc AS nasc, estado_civil AS civil, 
          naturalidade, nacionalidade, escolaridade, profissao, situacao, 
          cpf_cliente AS cpf, rg_cliente AS rg, renda_mensal AS renda, comprovante_renda AS comp_renda 
        FROM clientes`
      );
      res.json(rows);
    } catch (error) {
      console.error('Erro ao listar clientes:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

          // ROTA para LISTAR UM CLIENTE ESPECÍFICO
  app.get('/clientes/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const [rows] = await pool.query(
        `SELECT 
          id_clientes AS id, nome_cliente AS nome, data_nasc AS nasc, estado_civil AS civil, 
          naturalidade, nacionalidade, escolaridade, profissao, situacao, 
          cpf_cliente AS cpf, rg_cliente AS rg, renda_mensal AS renda, comprovante_renda AS comp_renda 
        FROM clientes
        WHERE id_clientes = ?`,
        [id]
      );
  
      if (rows.length === 0) {
        return res.status(404).json({ success: false, message: 'Cliente não encontrado' });
      }
  
      res.json(rows[0]);
    } catch (error) {
      console.error('Erro ao obter cliente:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });


  //  DELETE  // ROTA PARA DELETAR UM CLIENTE

  app.delete('/clientes/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const [result] = await pool.query(
        `DELETE FROM clientes WHERE id_clientes = ?`,
        [id]
      );
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Cliente não encontrado' });
      }
  
      res.json({ success: true, message: 'Cliente excluído com sucesso' });
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

  //  PUT  // ROTA PARA ATUALIZAR UM CLIENTE

  app.put('/clientes/:id', async (req, res) => {
    const { id } = req.params; // Obter o ID do cliente enviado
    const { nome, nasc, civil, naturalidade, nacionalidade, escolaridade, 
            profissao, situacao, cpf, rg, renda, comp_renda } = req.body; // Obter os dados do cliente no corpo da req
  
    try {
      const [result] = await pool.query(
        `UPDATE clientes SET 
          nome_cliente = ?, data_nasc = ?, estado_civil = ?, 
          naturalidade = ?, nacionalidade = ?, escolaridade = ?, 
          profissao = ?, situacao = ?, cpf_cliente = ?, 
          rg_cliente = ?, renda_mensal = ?, comprovante_renda = ? 
        WHERE id_clientes = ?`,
        [nome, nasc, civil, naturalidade, nacionalidade, escolaridade, 
         profissao, situacao, cpf, rg, renda, comp_renda, id]
      );
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, message: 'Cliente não encontrado' });
      }
  
      res.status(200).json({ success: true, message: 'Cliente atualizado com sucesso' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Erro ao atualizar cliente' });
    }
  });
  
  

 

  
  
  
  