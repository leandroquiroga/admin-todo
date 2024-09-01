"use client";
import React, { startTransition } from "react";
import { useOptimistic } from "react";
import { ItemProps } from "../../utils/features/todos/interfaces";

import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

export const TodoItem = ({ item, toggleTodo }: ItemProps) => {
  const [itemOptimistic, toggleItemOptimistic] = useOptimistic(
    item,
    (state, newCompleteValue: boolean) => {
      // Nos aseguramos de que state no sea undefined antes de acceder a sus propiedades
      if (!state) return undefined;

      return { ...state, done: newCompleteValue };
    }
  );

  const onToggle = async () => {
    try {
      startTransition(() => toggleItemOptimistic(!itemOptimistic?.done));
      await toggleTodo(itemOptimistic!.id, !itemOptimistic?.done);
    } catch (error) {
      startTransition(() => toggleItemOptimistic(!itemOptimistic?.done));
    }
  };

  return (
    <div
      className={itemOptimistic?.done ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div
          onClick={onToggle}
          className={`
          flex p-2 rounded-ms cursor-pointer
          horver:bg-opacity-60
        `}>
          {itemOptimistic?.done ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div>{itemOptimistic?.description}</div>
      </div>
    </div>
  );
};
