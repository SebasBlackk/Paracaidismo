const db = require('../config/db');

class Evento {
    static getAll(callback) {
        const query = 'SELECT * FROM eventos';
        db.query(query, callback);
    }

    static getById(id, callback) {
        const query = 'SELECT * FROM eventos WHERE id = ?';
        db.query(query, [id], callback);
    }

    static create(data, callback) {
        const query = 'INSERT INTO eventos SET ?';
        db.query(query, data, callback);
    }

    static update(id, data, callback) {
        const query = 'UPDATE eventos SET ? WHERE id = ?';
        db.query(query, [data, id], callback);
    }

    static delete(id, callback) {
        const query = 'DELETE FROM eventos WHERE id = ?';
        db.query(query, [id], callback);
    }
}

module.exports = Evento;