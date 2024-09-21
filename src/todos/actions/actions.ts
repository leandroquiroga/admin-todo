'use server';
import { getUserSession } from "@/auth/components/actions/auth-actions";
/**
 * El uso de los server actions nos permite realizar acciones del lado del servidor, si necesidad de crear endpoints. 
 * Si queremos utilizar un server action en una funcion podemos colocar el 'use server' dentro de la funcion, en cambio si la queremos utilizar para todo el 
 * archivo debemos colocarlo al principio del archivo, aunque esto se ejecute del lado del servidor el cliente lo puede mandar a llamar.
*/

import prisma from "@/lib/prisma";
import { ResponseCreateTodo } from "@/types";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const sleep = async (second: number = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, second * 1000);
  })
};


export const toggleTodo = async (id: string, done: boolean): Promise<Todo> => {

  // await sleep(3); // Simulamos una petición lenta

  const todo = await prisma.todo.findUnique({ where: { id } });

  if (!todo) throw new Error(`Todo with id ${id} not found`);


  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { done }
  });

  revalidatePath("/dashboard/rest-todo"); // Revalidamos la page para ver reflejado el cambios
  return updateTodo;
}

export const createTodo = async (description: string, userId: string): Promise<ResponseCreateTodo> => {

  try {
    const todo = await prisma.todo.create({ data: { description } })
    revalidatePath("/dashboard/rest-todo");
    return todo;
  } catch (error: any) {
    return {
      path: `Error location: ${error.path}`,
      errorOriginalValue: `Error value: ${error.params.originalValue}`,
      message: error.message,
      status: 'Bad Request',
      statusCode: 400
    }
  }
}

export const deleteCompletedTodo = async (): Promise<void> => {
  await prisma.todo.deleteMany({ where: { done: true } });
  revalidatePath("/dashboard/rest-todo");
}