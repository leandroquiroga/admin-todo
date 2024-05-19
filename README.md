# Development

Paso a paso para levantar la app en desarrollo

1. Bases de datos
   Para levantar la base de datos debemos introducir el siguiente comando

```
docker compose up -d
```

2. Variables de entorno
   Se debe renombrar el .env.template por .env y reemplazar variables de entorno

3. SEED
   Se debe ejecutar el seed /api/seed para crear la bases de datos local

# Prisma

Serie de comando para utilizar Prisma con Next.js

```
 npx prisma init
 npx prisma migrate dev
 npx prisma generate
```
