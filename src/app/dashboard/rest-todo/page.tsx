import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export default async function TodoPage() {
  // traemos todos los todos por orden ascendente de descripción via prisma
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <TodosGrid todos={todos} />
    </div>
  );
}
