import { ClienteTypes, IClienteRepository } from "@src/types/cliente.types";


export class ClienteRepository implements IClienteRepository {
    private readonly cliente: ClienteTypes[] = []

    async create(data: ClienteTypes): Promise<ClienteTypes> {
        this.cliente.push(data)
        return data
    }

    async find(_data?: ClienteTypes): Promise<ClienteTypes[]> {
        return this.cliente
    }


}