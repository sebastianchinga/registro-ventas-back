// import jwt from 'jsonwebtoken'
import Usuario from "../models/Usuario.js"
import generarJWT from '../helpers/generarJWT.js';

export const registro = async (req, res) => {
    const { email } = req.body;
    const usuarioExiste = await Usuario.findOne({ where: { email } });

    if (usuarioExiste) {
        const error = new Error('Este usuario ya existe');
        return res.status(400).json({msg: error.message});
    }
    
    const user = new Usuario(req.body);
    try {
        await user.save();
        res.json({msg: 'Usuario creado correctamente' });
    } catch (error) {
        res.status(400).json({ msg: error });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
        const error = new Error('El usuario no existe');
        return res.status(400).json({msg: error.message});
    }

    if (await usuario.comprobarPassword(password)) {
        res.json({
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario.id)
        })
    } else {
        const error = new Error('El password es incorrecto');
        return res.status(400).json({msg: error.message});
    }
    
}

export const perfil = async (req, res) => {
    res.json({
        id: req.usuario.id,
        nombre: req.usuario.nombre,
        email: req.usuario.email
    })
}