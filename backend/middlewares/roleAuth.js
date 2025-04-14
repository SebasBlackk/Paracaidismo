const jwt = require('jsonwebtoken');

module.exports = (rolesPermitidos) => {
    return (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ error: 'Acceso denegado' });

        try {
            const verified = jwt.verify(token.split(' ')[1], 'secreto');
            req.user = verified;

            if (!rolesPermitidos.includes(req.user.rol)) {
                return res.status(403).json({ error: 'Permiso denegado' });
            }

            next();
        } catch (err) {
            res.status(400).json({ error: 'Token inválido' });
        }
    };
};