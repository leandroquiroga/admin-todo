"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as apiTodo from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";

interface NewTodoProps {
  todos: Todo[];
}
export const NewTodo = ({ todos }: NewTodoProps) => {
  const router = useRouter();
  const [description, setDescription] = useState("");
  const [disabledButton, setDisabledButton] = useState(false);

  // Validamos si hay algún todo completado para setear el estado que controla el botón de eliminar todos los completados
  useEffect(() => {
    const disabled = todos.some((todo) => todo.done === true);
    setDisabledButton(disabled);
  }, [todos]);

  const onSubmitTodo = async (e: FormEvent) => {
    // implementar la lógica de creación de un nuevo todo
    e.preventDefault();

    // Validamos que la descripción no esté vacía
    if (description.trim().length === 0) return;

    await apiTodo.createTodo(description);

    router.refresh();

    //Limpiamos el campo de descripción
    setDescription("");
  };

  const onDeleteTodo = async (e: FormEvent) => {
    e.preventDefault();

    await apiTodo.deleteTodoCompleted();
    router.refresh();
  };

  return (
    <form onSubmit={onSubmitTodo} className="flex w-full">
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-6/12 -ml-10 pl-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="What needs to be done?"
      />

      <div className="justify-between flex">
        <button
          type="submit"
          className="flex item-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
          Add Todo
        </button>

        <span className="flex flex-1"></span>
        {disabledButton && (
          <button
            onClick={(e) => onDeleteTodo(e)}
            type="button"
            className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
            <IoTrashOutline />
            Delete completed
          </button>
        )}
      </div>
    </form>
  );
};
