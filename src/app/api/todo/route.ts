import { NextResponse } from "next/server";
import * as yup from 'yup';
import prisma from '@/lib/prisma';


export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const takeQuery = Number(searchParams.get('take') ?? '10');
  const skipQuery = Number(searchParams.get('skip') ?? '0');

  if (isNaN(takeQuery)) {
    return NextResponse.json({ message: "Invalid take query" }, { status: 400 });
  }

  if (isNaN(skipQuery)) {
    return NextResponse.json({ message: "Invalid skip query" }, { status: 400 });
  }

  const todo = await prisma.todo.findMany({
    take: takeQuery,
    skip: skipQuery,
  });

  return NextResponse.json({ data: todo, message: "Ok" })
}

/**
 * Se debe crear el schema de validación con yup antes de la request del metodo post 
 * porque el metodo post puede tener un body diferente al de otros endpoints.
 */
const postSchema = yup.object({
  description: yup.string().required().meta({ message: 'Description is required' }).min(3).meta({ message: 'Description must be at least 3 characters' }),
  done: yup.boolean().required().meta({ message: 'Done is required' }).default(false),
});

export async function POST(request: Request) {

  try {
    // Validamos el body de la request contra el schema de yup
    const { description, done, ...rest } = await postSchema.validate(await request.json());

    // Obtenemos las key de objeto rest
    const objectLengthRest = Object.keys(rest);

    if (objectLengthRest.length > 0) {

      return NextResponse.json({
        message: "Invalid body contain property not allowed",
        property: rest,
        status: 'Bad Request',
        statusCode: 400
      }, { status: 400 });
    }

    const todo = await prisma.todo.create({
      data: { description, done }
    })

    return NextResponse.json({ message: "Has been created a new task", data: todo });
  } catch (error: any) {
    return NextResponse.json({
      path: `Error location: ${error.path}`,
      errorOriginalValue: `Error value: ${error.params.originalValue}`,
      message: error.message,
      status: 'Bad Request',
      statusCode: 400
    }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    // Eliminanos los todos que esten complentados de las bases de datos
    const response = await prisma.todo.deleteMany({ where: { done: true } });

    if (response.count === 0) return NextResponse.json({ message: "No completed tasks to delete" });

    return NextResponse.json({ message: "Has been deleted all completed tasks" });
  } catch (error) {
  }
}