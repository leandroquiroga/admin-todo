import React from "react";
import { Todos } from "../interfaces";
import { TodoItem } from "./TodoItem";

export const TodosGrid = ({ todos = [] }: Todos) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};
