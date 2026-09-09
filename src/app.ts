import { server } from "./server/server"
import dotenv from "dotenv"
import { pool } from "./configs/postgres"

dotenv.config()
const PORT = process.env.PORT || 3000

try {
  pool.connect()
  console.log('Base de datos conectada correctamente')
} catch (error) {
  console.error('Error al conectar a la base de datos: \n', error)
}

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`)
})