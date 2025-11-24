import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Local from "./Local.js";

const Cliente = db.define('clientes', {
    nombre: {
        type: DataTypes.STRING(45),
    },
    apellido: {
        type: DataTypes.STRING(45),
    },
    telefono: {
        type: DataTypes.STRING(11)
    },
    email: {
        type: DataTypes.STRING(100)
    },
    numero_boleta: {
        type: DataTypes.INTEGER
    },
    fecha_registro: {
        type: DataTypes.DATE
    },
    fecha_compra: {
        type: DataTypes.DATE
    },
    imagen: {
        type: DataTypes.STRING
    },
    locales_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Local,
            key: 'id'
        }
    }
}, {
    timestamps: false
})

export default Cliente