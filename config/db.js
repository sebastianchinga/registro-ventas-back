import { Sequelize } from "sequelize";

const db = new Sequelize({
    database: 'registro-facturas',
    host: 'localhost',
    dialect: "mysql",
    username: 'root',
    password: 'root'
})

export default db;