import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usuariosRoute from './routes/usuariosRoute.js';
import localesRoute from './routes/localesRoute.js';
import db from './config/db.js';
import './models/Usuario.js'
import './models/Local.js'
import './models/Cliente.js'

const app = express();

dotenv.config();

db.authenticate().then(() => console.log('Base de datos conectado')).catch(e => console.log(e))
db.sync().then(() => console.log('Tablas creadas')).catch(e => console.log(e))

const PORT = process.env.PORT || 4000;
const URL_PERMITIDOS = [process.env.URL_FRONTEND];

const corsOptions = {
    origin: function (origin, callback) {
        if (URL_PERMITIDOS.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/usuarios', usuariosRoute);
app.use('/api/locales', localesRoute);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})