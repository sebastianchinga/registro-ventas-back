import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const db = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
})

export default db;