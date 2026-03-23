# tRPC Micro - NestJS + tRPC Monorepo

A monorepo project using NestJS with tRPC for type-safe APIs, built with Turborepo.

## Project Structure

```
my-turborepo/
├── apps/
│   ├── items/        # Items microservice (NestJS + tRPC)
│   └── payments/     # Payments microservice (NestJS + tRPC)
├── packages/
│   └── trpc/        # Shared tRPC utilities and routers
└── turbo.json       # Turborepo configuration
```

## Apps & Packages

### Apps

- **`apps/items`**: NestJS application with items management
  - REST API endpoints for CRUD operations
  - tRPC router for type-safe API
  - Technologies: NestJS, nestjs-trpc, Zod

- **`apps/payments`**: NestJS application with payments management
  - REST API endpoints for CRUD operations
  - tRPC router for type-safe API
  - Technologies: NestJS, nestjs-trpc, Zod

### Packages

- **`@repo/trpc`**: Shared tRPC utilities and router configurations
  - Base tRPC initialization with SuperJSON transformer
  - Reusable router and procedure exports

## Technologies

- [NestJS](https://nestjs.com/) - Node.js framework
- [tRPC](https://trpc.io/) - Type-safe APIs
- [Zod](https://zod.dev/) - TypeScript-first schema validation
- [Superjson](https://github.com/blitz-js/superjson) - JSON serialization
- [Turborepo](https://turbo.build/) - Build system
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```sh
pnpm install
```

### Development

Run all apps in development mode:

```sh
pnpm turbo dev
```

Run a specific app:

```sh
# Items app
pnpm --filter=items dev

# Payments app
pnpm --filter=payments dev
```

### Build

Build all apps:

```sh
pnpm turbo build
```

Build a specific app:

```sh
pnpm turbo build --filter=items
pnpm turbo build --filter=payments
```

### Linting

Lint all apps:

```sh
pnpm turbo lint
```

Lint a specific app:

```sh
pnpm --filter=items lint
pnpm --filter=payments lint
```

## API Endpoints

### Items App (Port 3000)

| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/items`     | Create item    |
| GET    | `/items`     | List all items |
| GET    | `/items/:id` | Get item by ID |
| PUT    | `/items/:id` | Update item    |
| DELETE | `/items/:id` | Delete item    |

### Payments App (Port 3001)

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/payments`     | Create payment    |
| GET    | `/payments`     | List all payments |
| GET    | `/payments/:id` | Get payment by ID |

## tRPC Routes

Both apps expose tRPC routers:

- `items.listItems` - Query all items
- `items.getItem` - Query item by ID
- `items.createItem` - Mutation to create item
- `items.updateItem` - Mutation to update item
- `items.deleteItem` - Mutation to delete item
- `payments.getPayment` - Query payment by ID

## Contributing

1. Run linting before committing
2. Ensure TypeScript compiles without errors
3. Follow conventional commits format
