const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization'); // Leer el token del encabezado
    if (!token) return res.status(401).json({ error: 'Acceso denegado' });

    try {
        const verified = jwt.verify(token.split(' ')[1], 'secreto'); // Cambia 'secreto' por tu clave secreta
        req.user = verified; // Agregar los datos del usuario al objeto `req`
        next(); // Continuar con la siguiente función
    } catch (err) {
        res.status(400).json({ error: 'Token inválido' });
    }
};