# Development

Paso a paso para levantar la app en desarrollo

1. Bases de datos
   Para levantar la base de datos debemos introducir el siguiente comando

   ```
      docker compose up -d
   ```

2. Variables de entorno
   Se crear una copia el .env.template por .env y reemplazar variables de entorno

3. Instalar dependencias
   Una vez creada la copia de la variable de entorno, se debe instalar las dependencias.
   ```
      npm install
   ```
4. Ejecutar el servidor
   Para levantar nuestra aplicacion en un puerto local se debe ejecutar el siguiente comando:

   ```
      npm run dev
   ```

5. Ejecutar comandos de prisma

   ```
      npx prisma migrate dev
      npx prisma generate
   ```

   prisma migrate dev: Se encarga de realizar la sincronizacion con el cliente
   prisma generate: Se encarga de crear nuestro cliente

6. SEED
   Se debe ejecutar el seed /api/seed para crear la bases de datos local

7. Inicializacion de Prisma
   Serie de comando para utilizar Prisma con Next.js
   ```
   npx prisma init
   npx prisma migrate dev
   npx prisma generate
   ```

## NOTA: Usuario por defecto con sus respectivos todos

```
   __usuario__: tester1@google.com
   __passwor__d: 1234567
```
