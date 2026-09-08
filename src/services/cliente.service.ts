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
}
