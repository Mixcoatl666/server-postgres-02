import pg from "pg"
import { ClienteTypes } from "../types/cliente.types"

export type ClienteRow = {
	idcliente: number
	nombre: string
	edad: number
	telefono: string
	create_at: Date
}

export const toCliente = (row: ClienteRow): ClienteTypes => ({
	idCliente: row.idcliente,
	nombre: row.nombre,
	edad: row.edad,
	telefono: row.telefono,
	createAt: row.create_at
})

export type ClienteInsert = Omit<ClienteTypes, "idCliente" | "createAt">
export type ClienteQueryResult = pg.QueryResult<ClienteRow>