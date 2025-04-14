const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // Si usas contraseñas encriptadas
const db = require('../config/db'); // Conexión a la base de datos

class UsuariosController {
    static login(req, res) {
        const { email, contraseña } = req.body;

        // Verificar si el usuario existe en la base de datos
        const query = 'SELECT * FROM usuarios WHERE email = ?';
        db.query(query, [email], async (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Error al consultar la base de datos' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const user = results[0];

            // Verificar la contraseña
            const validPassword = await bcrypt.compare(contraseña, user.contraseña);
            if (!validPassword) {
                return res.status(401).json({ error: 'Contraseña incorrecta' });
            }

            // Generar el token JWT
            const token = jwt.sign(
                {
                    id: user.id,
                    email: user.email,
                    rol: user.rol // Incluye el rol del usuario
                },
                'secreto', // Cambia 'secreto' por una clave más segura y usa variables de entorno
                { expiresIn: '1h' } // El token expira en 1 hora
            );

            res.json({ token });
        });
    }
}

module.exports = UsuariosController;