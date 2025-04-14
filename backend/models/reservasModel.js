const db = require('../config/db');

class Reserva {
    static create(data, callback) {
        const query = 'INSERT INTO reservas (id_usuario, id_evento, estado) VALUES (?, ?, ?)';
        db.query(query, [data.id_usuario, data.id_evento, data.estado || 'pendiente'], callback);
    }

    static findAll(callback) {
        const query = `
            SELECT r.id, r.fecha_reserva, r.estado, 
                   u.nombre AS usuario, e.nombre AS evento 
            FROM reservas r
            JOIN usuarios u ON r.id_usuario = u.id
            JOIN eventos e ON r.id_evento = e.id
        `;
        db.query(query, callback);
    }

    static findById(id, callback) {
        const query = `
            SELECT r.id, r.fecha_reserva, r.estado, 
                   u.nombre AS usuario, e.nombre AS evento 
            FROM reservas r
            JOIN usuarios u ON r.id_usuario = u.id
            JOIN eventos e ON r.id_evento = e.id
            WHERE r.id = ?
        `;
        db.query(query, [id], callback);
    }

    static update(id, data, callback) {
        const query = 'UPDATE reservas SET estado = ? WHERE id = ?';
        db.query(query, [data.estado, id], callback);
    }

    static delete(id, callback) {
        const query = 'DELETE FROM reservas WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = Reserva;