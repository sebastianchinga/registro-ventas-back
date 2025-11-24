import jwt from 'jsonwebtoken';

const generarJWT = (id) => {
    return jwt.sign({id}, 'palabrasupersecreta', {
        expiresIn: '30d'
    })
}

export default generarJWT