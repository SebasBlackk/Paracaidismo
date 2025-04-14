const express = require('express');
const usuariosRoutes = require('./routes/usuariosRoutes');
const eventosRoutes = require('./routes/eventosRoutes');
const reservasRoutes = require('./routes/reservasRoutes');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de tu proyecto');
});

// Configuración de rutas
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/reservas', reservasRoutes);

// Manejar errores 404
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});