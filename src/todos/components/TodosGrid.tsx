"use client";

import React from "react";
import { Todos } from "../interfaces";
import { TodoItem } from "./TodoItem";
import * as apiTodo from "@/todos/helpers/todos";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";

export const TodosGrid = ({ todos = [] }: Todos) => {
  const router = useRouter();

  // Con esta función next se encarga de cargar la ruta actual y solo actualiza los
  // componentes afectados (rescontruye los componentes que han cambiado)
  const toggleTodo = async (id: string, done: boolean) => {
    const updateTodo = await apiTodo.updateTodo(id, done);

    // Refrescamois la pantalla de este componente
    router.refresh();

    return updateTodo;
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
