
/**
 * 
 * @param request request of the petition
 * @param segments this segments is the id of the params in the url
 * @returns an object with data and message                   
*/

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from 'yup';

interface Segments {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: Segments) {

  const { id } = params;

  const todo = await prisma.todo.findFirst({
    where: {
      id,
    }
  });

  if (!todo) return NextResponse.json({ message: `Todo with ${id} Not Found` }, { status: 404 });

  return NextResponse.json({ message: "OK", data: todo });
}

const putSchema = yup.object({
  description: yup.string().optional(),
  done: yup.boolean().optional(),
})

export async function PUT(request: Request, { params }: Segments) {

  try {
    const { id } = params;
    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) return NextResponse.json({ message: `Todo with ${id} Not Found` }, { status: 404 });

    const { description, done, ...rest } = await putSchema.validate(await request.json())
    const objectLengthRest = Object.keys(rest);

    // Validamos la longitud del arreglo de rest, para verificar que no contenga propiedades no permitidas
    if (objectLengthRest.length > 0)
      return NextResponse.json({
        message: "Invalid body contain property not allowed",
        property: rest,
        status: 'Bad Request',
        statusCode: 400
      }, { status: 400 });

    // Updateamos el todo por el id
    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { description, done }
    });

    return NextResponse.json({ message: `Todo ${id} has been updated`, data: updateTodo });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      path: `Error location: ${error.path}`,
      errorOriginalValue: `Error value: ${error.params.originalValue}`,
      message: error.message,
      status: 'Bad Request',
      statusCode: 400
    }, { status: 400 });
  }
}