import { Router } from "express"
import { IClienteRepository, IClienteService } from "../types/cliente.types";
import { ClienteRepository } from "../repositories/cliente.repositories";
import { ClienteService } from "../services/cliente.service";

const router = Router()
const clienteRepository: IClienteRepository = new ClienteRepository()
const userService: IClienteService = new ClienteService(clienteRepository)

router.get("/info-clientes", (req, res) => {
    res.json({ message: "Ruta de clientes" })
})

router.get("/clientes", async (req, res) => {
    try {
        const clientes = await userService.findCliente()
        res.json(clientes)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los clientes\n error: " + error })
    }
})

router.post("/clientes", async (req, res) => {
    try {
        const cliente = req.body
        const newCliente = await userService.createCliente(cliente)
        res.status(201).json(newCliente)
    } catch (error) {
        res.status(500).json({ message: "Error al crear el cliente\n error: " + error })
    }
})

export const clienteRoutes = router 