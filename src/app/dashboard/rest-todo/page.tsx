export const dynamic = "force-dynamic";
// Nos aseguramos de que la page sea dinamicamente generada
export const revalidate = 0;

import { getUserSession } from "@/auth/components/actions/auth-actions";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { redirect } from "next/navigation";

export default async function TodoPage() {
  const user = await getUserSession();

  if (!user) redirect("/api/auth/signin");
  // traemos todos los todos por orden ascendente de descripción via prisma
  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5 items-center flex justify-center">
        <NewTodo todos={todos} />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
