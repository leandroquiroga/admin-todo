import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export default async function TodoPage() {
  // traemos todos los todos por orden ascendente de descripción via prisma
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5 items-center flex justify-center">
        <NewTodo todos={todos} />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
