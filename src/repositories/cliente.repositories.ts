import { pool } from "../configs/postgres";
import { toCliente } from "../models/clientes";
import { ClienteTypes, IClienteRepository } from "../types/cliente.types";

export class ClienteRepository implements IClienteRepository {
  async create(data: ClienteTypes): Promise<ClienteTypes> {
    const result = await pool.query(
      `INSERT INTO clientes (nombre, edad, telefono)
             VALUES ($1, $2, $3)
             RETURNING idcliente, nombre, edad, telefono, create_at`,
      [data.nombre, data.edad, data.telefono],
    );

    return toCliente(result.rows[0]);
  }

  async find(): Promise<ClienteTypes[]> {
    const result = await pool.query(
      `SELECT idcliente AS idcliente, nombre, edad, telefono, create_at
             FROM clientes
             ORDER BY idcliente`,
    );

    return result.rows.map(toCliente);
  }

  async findById(id: number): Promise<ClienteTypes | null> {
    const result = await pool.query(
      `SELECT idcliente AS idcliente, nombre, edad, telefono, create_at
             FROM clientes
             WHERE idcliente = $1`,
      [id],
    );

    return result.rows[0] ? toCliente(result.rows[0]) : null;
  }

  async update(
    id: number,
    data: Partial<ClienteTypes>,
  ): Promise<ClienteTypes | null> {
    const result = await pool.query(
      `UPDATE clientes
             SET nombre = COALESCE($1, nombre),
                 edad = COALESCE($2, edad),
                 telefono = COALESCE($3, telefono)
             WHERE idcliente = $4
             RETURNING idcliente, nombre, edad, telefono, create_at`,
      [data.nombre, data.edad, data.telefono, id],
    );

    return result.rows[0] ? toCliente(result.rows[0]) : null;
  }

  async delete(id: number): Promise<boolean> {
    const result = await pool.query(
      "DELETE FROM clientes WHERE idcliente = $1",
      [id],
    );

    return result.rowCount === 1;
  }
}
