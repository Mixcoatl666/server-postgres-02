import { Repository } from "./repository.types";

export interface ClienteTypes {
  idCliente: number;
  nombre: string;
  edad: number;
  telefono: string;
  createAt: Date;
}

export interface IClienteRepository extends Repository<ClienteTypes> {}

export interface IClienteService {
    createCliente(cliente: ClienteTypes): Promise<ClienteTypes>
    findCliente(): Promise<ClienteTypes[]>
}