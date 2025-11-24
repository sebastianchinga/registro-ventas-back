import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Local = db.define('locales', {
    direccion: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

export default Local