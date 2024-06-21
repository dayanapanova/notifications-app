# Notifications app

![image](https://github.com/dayanapanova/notifications-app/assets/67751911/bc32551e-a898-44fa-ad2a-5957173d2a10)


[DEMO](https://notifications-app-eta.vercel.app)

## Local development

### Setup .env.local (copy content from .env.example)

```shell
DATABASE_URL=postgres://notifications-user:notifications-db-password@localhost:5432/notifications-db
```

### Start database

```shell
docker-compose up database
```

### Install packages

```shell
pnpm install
```

### Start dev server

```shell
pnpm dev
```

## Requirements

- Node >= 18.0.0
