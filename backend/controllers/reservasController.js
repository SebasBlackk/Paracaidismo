const Reserva = require('../models/reservasModel');

class ReservasController {
    static createReserva(req, res) {
        const { id_usuario, id_evento, estado } = req.body;

        if (!id_usuario || !id_evento) {
            return res.status(400).json({ error: 'id_usuario y id_evento son obligatorios' });
        }

        Reserva.create({ id_usuario, id_evento, estado }, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al crear la reserva', details: err });
            }
            res.status(201).json({ message: 'Reserva creada con éxito', id: results.insertId });
        });
    }

    static getAllReservas(req, res) {
        Reserva.findAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al obtener las reservas', details: err });
            }
            res.json(results);
        });
    }

    static getReservaById(req, res) {
        const { id } = req.params;

        Reserva.findById(id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al obtener la reserva', details: err });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Reserva no encontrada' });
            }
            res.json(results[0]);
        });
    }

    static updateReserva(req, res) {
        const { id } = req.params;
        const { estado } = req.body;

        if (!estado) {
            return res.status(400).json({ error: 'El campo estado es obligatorio' });
        }

        Reserva.update(id, { estado }, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al actualizar la reserva', details: err });
            }
            res.json({ message: 'Reserva actualizada con éxito' });
        });
    }

    static deleteReserva(req, res) {
        const { id } = req.params;

        Reserva.delete(id, (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al eliminar la reserva', details: err });
            }
            res.json({ message: 'Reserva eliminada con éxito' });
        });
    }
}

module.exports = ReservasController;