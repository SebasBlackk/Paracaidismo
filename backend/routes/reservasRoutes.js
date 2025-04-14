const express = require('express');
const router = express.Router();
const ReservasController = require('../controllers/reservasController');
const auth = require('../middlewares/auth');
const roleAuth = require('../middlewares/roleAuth');

// Rutas protegidas para gestionar reservas
router.post('/', auth, ReservasController.createReserva);
router.get('/', auth, roleAuth(['administrador']), ReservasController.getAllReservas);
router.get('/:id', auth, ReservasController.getReservaById);
router.put('/:id', auth, roleAuth(['administrador']), ReservasController.updateReserva);
router.delete('/:id', auth, roleAuth(['administrador']), ReservasController.deleteReserva);

module.exports = router;