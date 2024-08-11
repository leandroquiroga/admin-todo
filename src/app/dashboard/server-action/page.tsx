import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export default async function ServerTodosPage() {
  // traemos todos los todos por orden ascendente de descripción via prisma
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <span className="text-3xl my-4">Server Action</span>
      <div className="w-full px-3 mx-5 mb-5 items-center flex justify-center">
        <NewTodo todos={todos} />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
