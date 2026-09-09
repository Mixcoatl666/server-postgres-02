import {
  ClienteTypes,
  IClienteRepository,
  IClienteService,
} from "../types/cliente.types";

export class ClienteService implements IClienteService {
  private readonly clienteRepository: IClienteRepository;

  constructor(clienteRepository: IClienteRepository) {
    this.clienteRepository = clienteRepository;
  }

  async createCliente(cliente: ClienteTypes): Promise<ClienteTypes> {
    return await this.clienteRepository.create(cliente);
  }

  async findCliente(): Promise<ClienteTypes[]> {
    return await this.clienteRepository.find();
  }

  async findClienteById(id: number): Promise<ClienteTypes | null> {
    return await this.clienteRepository.findById(id);
  }

  async updateCliente(id: number, cliente: Partial<ClienteTypes>): Promise<ClienteTypes | null> {
    return await this.clienteRepository.update(id, cliente);
  }
  
  async deleteCliente(id: number): Promise<boolean> {
    return await this.clienteRepository.delete(id);
  }
}
