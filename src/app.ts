import { server } from "./server/server"
import dotenv from "dotenv"
import "./configs/postgres"

dotenv.config()
const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})