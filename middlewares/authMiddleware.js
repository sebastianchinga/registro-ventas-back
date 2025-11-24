import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario.js';

const authMiddleware = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = await jwt.verify(token, 'palabrasupersecreta');
            req.usuario = await Usuario.findByPk(decoded.id);
            return next();
        } catch (error) {
            return res.status(400).json({msg: 'Hubo un error con el token'})
        }
    }

    if (!token) {
        const error = new Error('Token inexistente');
        return res.status(400).json({msg: error.message})
    }

    next();

}

export default authMiddleware