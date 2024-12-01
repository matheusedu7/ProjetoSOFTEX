const express = require('express');
const pool = require('./db/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Importação do módulo de rotas
const clientesRoutes = require('./routes/clientes'); // Rotas de clientes

// Teste de conexão com o banco
app.get('/ping', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT 1 AS status');
    res.status(200).json({ status: result[0].status, message: 'Banco conectado!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar no banco.', error: error.message });
  }
});

// Middleware para as rotas de clientes
app.use('/clientes', clientesRoutes);

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