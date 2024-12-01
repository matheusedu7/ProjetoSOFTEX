const pool = require('../db/connection'); // Importa a conexão com o banco de dados

// Listar todos os clientes
const listarClientes = async (req, res) => {
  try {
    const [result] = await pool.query(`
      SELECT id_clientes AS id, nome_cliente AS nome, data_nasc AS nasc,
      estado_civil AS civil, naturalidade, nacionalidade, escolaridade,
      profissao, situacao, cpf_cliente AS cpf, rg_cliente AS rg,
      renda_mensal AS renda, comprovante_renda AS comp_renda
      FROM clientes
    `);
    res.status(200).json(result);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
};

// Listar cliente por ID
const listarClientePorId = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query(`
      SELECT id_clientes AS id, data_inclusao AS inclusao, data_nasc AS nasc, nome_cliente AS nome,
      estado_civil AS civil, naturalidade, nacionalidade, escolaridade,
      profissao, situacao, cpf_cliente AS cpf, rg_cliente AS rg,
      renda_mensal AS renda, comprovante_renda AS comp_renda
      FROM clientes
      WHERE id_clientes = ?
    `, [id]);
    if (result.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado.' });
    }
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Criar novo cliente
const criarCliente = async (req, res) => {
    const { inclusao, nasc, nome, civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf, rg, renda, comp_renda } = req.body;
  
    // Validação dos dados obrigatórios
    if (!nome || !nasc || !cpf || !rg || !renda || !comp_renda) {
      return res.status(400).json({ error: 'Campos obrigatórios estão faltando!' });
    }
  
    try {
      // Query para inserir os dados
      await pool.query(`
        INSERT INTO clientes (data_inclusao, data_nasc, nome_cliente, estado_civil, naturalidade,
        nacionalidade, escolaridade, profissao, situacao, cpf_cliente, rg_cliente,
        renda_mensal, comprovante_renda)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [inclusao, nasc, nome, civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf, rg, renda, comp_renda]);
  
      // Sucesso
      res.status(201).json({ message: 'Cliente criado com sucesso!' });
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      res.status(500).json({ error: error.message });
    }
  };
  

// Atualizar cliente
const atualizarCliente = async (req, res) => {
  const { id } = req.params;
  const {inclusao, nasc, nome, civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf, rg, renda, comp_renda } = req.body;
  try {
    await pool.query(`
      UPDATE clientes
      SET data_inclusao = ?,  data_nasc = ?, nome_cliente = ?, estado_civil = ?, naturalidade = ?,
      nacionalidade = ?, escolaridade = ?, profissao = ?, situacao = ?, cpf_cliente = ?,
      rg_cliente = ?, renda_mensal = ?, comprovante_renda = ?
      WHERE id_clientes = ?
    `, [inclusao, nasc, nome, civil, naturalidade, nacionalidade, escolaridade, profissao, situacao, cpf, rg, renda, comp_renda, id]);
    res.status(200).json({ message: 'Cliente atualizado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Deletar cliente
const deletarCliente = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM clientes WHERE id_clientes = ?', [id]);
    res.status(200).json({ message: 'Cliente excluído com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  listarClientes,
  listarClientePorId,
  criarCliente,
  atualizarCliente,
  deletarCliente
};
