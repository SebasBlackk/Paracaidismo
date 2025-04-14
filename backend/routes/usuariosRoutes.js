const express = require('express');
const router = express.Router();
const UsuariosController = require('../controllers/usuariosController');

// Ruta para login
router.post('/login', UsuariosController.login);

module.exports = router;