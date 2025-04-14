const Evento = require('../models/eventosModel');

class EventosController {
    static getAllEventos(req, res) {
        Evento.getAll((err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json(results);
            }
        });
    }

    static getEventoById(req, res) {
        const { id } = req.params;
        Evento.getById(id, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else if (results.length === 0) {
                res.status(404).json({ message: 'Evento no encontrado' });
            } else {
                res.json(results[0]);
            }
        });
    }

    static createEvento(req, res) {
        const data = req.body;
        Evento.create(data, (err, results) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ id: results.insertId, ...data });
            }
        });
    }

    static updateEvento(req, res) {
        const { id } = req.params;
        const data = req.body;
        Evento.update(id, data, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Evento actualizado correctamente' });
            }
        });
    }

    static deleteEvento(req, res) {
        const { id } = req.params;
        Evento.delete(id, (err) => {
            if (err) {
                res.status(500).json({ error: err.message });
            } else {
                res.json({ message: 'Evento eliminado correctamente' });
            }
        });
    }
}

module.exports = EventosController;