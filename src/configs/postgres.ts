import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config()
const { Pool } = pg

export default (async () => {
    try {
        const pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: Number(process.env.DB_PORT)
        })
        await pool.connect()
        console.log('Base de datos conectada correctamente')
    } catch (error) {
        console.error('Error al conectar a la base de datos: \n', error)
        process.exit(1)
    }
})()