const express = require('express');
const router = express.Router();
const EventosController = require('../controllers/eventosController');
const auth = require('../middlewares/auth'); // Middleware de autenticación
const roleAuth = require('../middlewares/roleAuth'); // Middleware para roles

// Rutas públicas
router.get('/', EventosController.getAllEventos); // Obtener todos los eventos

// Rutas protegidas
router.post('/', auth, roleAuth(['administrador']), EventosController.createEvento);
router.put('/:id', auth, roleAuth(['administrador']), EventosController.updateEvento);
router.delete('/:id', auth, roleAuth(['administrador']), EventosController.deleteEvento);

module.exports = router;