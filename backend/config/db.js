const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost', // Cambia según tu configuración
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña
    database: 'paracaidismo_db' // Nombre de la base de datos
});

// Verificar si la conexión funciona
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});

module.exports = db;