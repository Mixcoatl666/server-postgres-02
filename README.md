# API de clientes

API REST construida con Node.js, TypeScript, Express y PostgreSQL para administrar clientes.

## Requisitos

- Node.js
- pnpm
- PostgreSQL

## Instalación

```bash
pnpm install
```

## Configuración

Crea un archivo `.env` en la raíz del proyecto con los datos de conexión a PostgreSQL:

```env
PORT=3000
DB_USER=postgres
DB_HOST=localhost
DB_NAME=nombre_de_la_base_de_datos
DB_PASSWORD=tu contraseña
DB_PORT=5432
```

Después, crea la tabla e inserta el registro inicial ejecutando [database/db.sql](database/db.sql) en la base de datos configurada.

## Uso

Iniciar el servidor en modo desarrollo:

```bash
pnpm dev
```

Compilar el proyecto:

```bash
pnpm build
```

Iniciar la versión compilada:

```bash
pnpm start
```

Por defecto, el servidor queda disponible en `http://localhost:3000`.

## Endpoints

Todas las rutas de clientes usan el prefijo `/api`.

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | `/api/info-clientes` | Comprueba la ruta de clientes |
| GET | `/api/clientes` | Obtiene todos los clientes |
| GET | `/api/clientes/:id` | Obtiene un cliente por su identificador |
| POST | `/api/clientes` | Crea un cliente |
| PUT | `/api/clientes/:id` | Actualiza un cliente |
| DELETE | `/api/clientes/:id` | Elimina un cliente |

### Crear un cliente

```bash
curl -X POST http://localhost:3000/api/clientes \
	-H "Content-Type: application/json" \
	-d '{"nombre":"Ana","edad":28,"telefono":"5551234567"}'
```

El cuerpo esperado contiene `nombre`, `edad` y `telefono`. Los identificadores `idCliente` y `createAt` los genera la aplicación o la base de datos.

### Actualizar un cliente

```bash
curl -X PUT http://localhost:3000/api/clientes/1 \
	-H "Content-Type: application/json" \
	-d '{"telefono":"5557654321"}'
```

### Eliminar un cliente

```bash
curl -X DELETE http://localhost:3000/api/clientes/1
```

Las operaciones sobre un identificador inexistente responden con `404`. Los errores internos responden con `500`.

## Estructura principal

```text
src/
├── configs/       # Conexión a PostgreSQL
├── models/        # Tipos y transformaciones de datos
├── repositories/  # Acceso a datos
├── routes/        # Endpoints HTTP
├── services/      # Lógica de negocio
└── server/        # Configuración de Express
database/
└── db.sql         # Esquema y datos iniciales
```

## Calidad

Ejecutar el análisis configurado para SonarQube:

```bash
pnpm sonar
```
