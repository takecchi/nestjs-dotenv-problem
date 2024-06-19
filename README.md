# nestjs-dotenv-problem

This repository demonstrates the issue where the `.env` file is prioritized over `.env.local` and `.env.production` files in a NestJS project.

## Prerequisites

Ensure the following are installed:
- Docker (required to start the MySQL server)
- Node.js

## How to Start

```bash
npm run start:dev
```

## Issue
When the application starts, the message from `.env.local`:

```The fact that this message is being displayed is correct.```

should be displayed. However, the message from `.env`:

```The fact that this message is being displayed is a problem.```

is being displayed instead.

This issue occurs when Prisma is installed, suggesting that Prisma might be the cause.