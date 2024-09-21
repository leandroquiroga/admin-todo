import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
  /*
   * Purgar un archivo de la base de datos
   * await prisma.todo.deleteMany({where:{complete: true}}) // Elimina todos los completos
   */
  await prisma.todo.deleteMany({}); // delete * from todo
  await prisma.user.deleteMany({}); // delete * from todo

  await prisma.user.create({
    data: {
      email: "tester1@google.com",
      password: bcrypt.hashSync("123456", 10),
      role: ["admin", "user", "super-user"],
      todos: {
        create: [
          {
            description: "Realizar correcion a la base de datos",
            done: true,
          },
          {
            description: "Realizar conexion a la base de datos",
            done: false,
          },
          {
            description: "Realizar eliminar a la base de datos",
            done: false,
          },
          {
            description: "Realizar actualizacion a la base de datos",
            done: true,
          },
        ],
      },
    },
  });

  /*
   * Ejemplo de como crear un registro en la base de datos
   *   const todo = await prisma.todo.create({ data: {description: 'Realizar correcion conexion a la base de datos',done: true,}});
   */

  return NextResponse.json({ message: "Hello, Seeds!" });
}
