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

router.get("/clientes/:id", async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id)
        const cliente = await userService.findClienteById(id)
        if (cliente) {
            res.json(cliente)
        } else {
            res.status(404).json({ message: "Cliente no encontrado" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el cliente\n error: " + error })
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

router.put("/clientes/:id", async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id)
        const cliente = req.body
        const updatedCliente = await userService.updateCliente(id, cliente)
        if (updatedCliente) {
            res.json(updatedCliente)
        } else {
            res.status(404).json({ message: "Cliente no encontrado" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el cliente\n error: " + error })
    }
})

router.delete("/clientes/:id", async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id)
        const deleted = await userService.deleteCliente(id)
        if (deleted) {
            res.json({ message: "Cliente eliminado correctamente" })
        } else {
            res.status(404).json({ message: "Cliente no encontrado" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el cliente\n error: " + error })
    }
})

export const clienteRoutes = router 