const db = require('../config/db');

class Usuario {
    static findByEmail(email, callback) {
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(query, [email], callback);
    }
}

module.exports = Usuario;