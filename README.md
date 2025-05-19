<img src="https://github.com/user-attachments/assets/ba8118fb-8718-4abf-b112-8bf452328cf6" alt="favicon-light" width="100"/>

# rTasks

This is a small tasks app with a SvelteKit frontend, and a Hono/TS backend.

## Running for Development
Install node_modules:
```bash
$ bun install
```

Build:
```bash
$ bun run build
```

Both the backend server, AND the frontend Vite server must be running at the same time.
```bash
./frontend $ cd ..
$ bun run dev

and

./frontend $ bun run dev
```
This is required as you cannot make unauthenticated requests directly to the backend server on :3000, so you need to use the frontend to log in first.
Requests to /api are also routed through to the backend server by the frontend, using Vite Proxy.

## Routes
```ts
goto('/') // Home page
goto('/about') // About page
goto('/tasks') // Tasks list
goto('/create-task') // Create a new task
goto('/profile') // User profile
goto('/api/login') // Redirect to Kinde login
goto('/api/logout') // Redirect to Kinde logout
```

## Deployment
This project is configured to deploy either to fly.io, or you can build a bare docker image with the Dockerfile provided.

### WARNING!!!
Do not deploy this app from this frontend repository. Please refer back to the [`rtasks-api`](https://github.com/aerofractal/rtasks-api) repository, for full deployment instructions.