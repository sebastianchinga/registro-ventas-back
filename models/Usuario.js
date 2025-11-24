import bcrypt from 'bcrypt'
import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const Usuario = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING(120)
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING(60)
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
})

Usuario.prototype.comprobarPassword = async function(passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password)
}

Usuario.beforeCreate(async (user, options) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
})

export default Usuario