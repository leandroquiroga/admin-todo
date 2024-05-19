import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {

  /*
      * Purgar un archivo de la base de datos
      * await prisma.todo.deleteMany({where:{complete: true}}) // Elimina todos los completos
  */
  await prisma.todo.deleteMany({}); // delete * from todo
  await prisma.todo.createMany({
    data: [
      { description: "Realizar conexion a la base de datos", done: true },
      { description: "Agregar la datos a la bases de datos" },
      { description: "Realizar metodo post para agregar datos" },
      { description: "Realizar metodo put para actualizar datos" },
      { description: "Realizar metodo delete para eliminar datos" }
    ]
  })
  /*
   * Ejemplo de como crear un registro en la base de datos
   *   const todo = await prisma.todo.create({ data: {description: 'Realizar correcion conexion a la base de datos',done: true,}});
   */

  return NextResponse.json({ message: "Hello, Seeds!" });
}