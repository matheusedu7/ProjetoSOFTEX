const express = require('express');
const router = express.Router();
const {
  listarClientes,
  listarClientePorId,
  criarCliente,
  atualizarCliente,
  deletarCliente
} = require('../controllers/clientescontroller'); // Importar os controladores

// Definição das rotas
router.get('/', listarClientes); // Listar todos os clientes
router.get('/:id', listarClientePorId); // Listar cliente por ID
router.post('/', criarCliente); // Criar novo cliente
router.put('/:id', atualizarCliente); // Atualizar cliente
router.delete('/:id', deletarCliente); // Excluir cliente

module.exports = router;
